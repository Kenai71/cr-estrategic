import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { PiLockKeyThin, PiSignOutThin, PiTableThin, PiTrashThin, PiCheckCircleThin } from 'react-icons/pi';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Verifica se já está logado na sessão atual
  useEffect(() => {
    const logged = sessionStorage.getItem('adminAuth');
    if (logged === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Busca os dados do Firebase em tempo real
  useEffect(() => {
    if (!isAuthenticated) return;

    setIsLoading(true);
    setError('');

    try {
      const q = query(collection(db, 'contatos'), orderBy('dataCriacao', 'desc'));
      
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const contatos = [];
        querySnapshot.forEach((doc) => {
          contatos.push({ id: doc.id, ...doc.data() });
        });
        setData(contatos);
        setIsLoading(false);
      }, (err) => {
        console.error(err);
        setError('Não foi possível carregar os dados. Verifique as regras do Firebase.');
        setIsLoading(false);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } catch (err) {
      console.error(err);
      setError('Erro ao conectar com o banco de dados.');
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Senha inicial
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
    } else {
      setError('Senha incorreta.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setData([]);
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Respondido' ? 'Pendente' : 'Respondido';
    try {
      const docRef = doc(db, 'contatos', id);
      await updateDoc(docRef, { status: newStatus });
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status. Verifique as permissões do Firebase.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja apagar este contato permanentemente?')) {
      try {
        await deleteDoc(doc(db, 'contatos', id));
      } catch (error) {
        console.error('Erro ao deletar contato:', error);
        alert('Erro ao apagar. Verifique as permissões do Firebase.');
      }
    }
  };

  const formatData = (timestamp) => {
    if (!timestamp) return '-';
    // Firebase serverTimestamp might be null initially before sync
    if (timestamp.toDate) {
      return timestamp.toDate().toLocaleString('pt-BR');
    }
    return '-';
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-box">
          <PiLockKeyThin size={48} className="admin-login-icon" />
          <h2>Acesso Restrito</h2>
          <p>Digite a senha para ver as solicitações.</p>
          
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Sua senha" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              autoFocus
            />
            {error && <span className="admin-error">{error}</span>}
            <button type="submit">Entrar no Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <div className="admin-header-title">
          <PiTableThin size={28} />
          <h2>Painel de Solicitações</h2>
        </div>
        <div className="admin-header-actions">
          <button className="admin-btn-logout" onClick={handleLogout} title="Sair">
            <PiSignOutThin size={22} />
            Sair
          </button>
        </div>
      </header>

      <main className="admin-content">
        {isLoading && data.length === 0 ? (
          <div className="admin-loading">Conectando ao banco de dados...</div>
        ) : error ? (
          <div className="admin-error-box">{error}</div>
        ) : data.length === 0 ? (
          <div className="admin-empty">Nenhuma solicitação encontrada ainda.</div>
        ) : (
          <div className="cards-grid">
            {data.map((row) => (
              <div className={`admin-card ${row.status === 'Respondido' ? 'card-respondido' : ''}`} key={row.id}>
                <div className="card-header">
                  <div className="card-date">{formatData(row.dataCriacao)}</div>
                  <div className="card-actions">
                    <button 
                      className={`status-btn ${row.status === 'Respondido' ? 'is-active' : ''}`}
                      onClick={() => toggleStatus(row.id, row.status)}
                      title={row.status === 'Respondido' ? "Marcar como Pendente" : "Marcar como Respondido"}
                    >
                      <PiCheckCircleThin size={24} />
                      <span className="tooltip">{row.status === 'Respondido' ? 'Respondido' : 'Pendente'}</span>
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(row.id)}
                      title="Apagar"
                    >
                      <PiTrashThin size={22} />
                    </button>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-name">{row.nome || '-'}</h3>
                  <div className="card-info-grid">
                    <div className="info-item">
                      <span className="info-label">Telefone</span>
                      <span className="info-value">{row.telefone || '-'}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">E-mail</span>
                      <span className="info-value">{row.email || '-'}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Empresa</span>
                      <span className="info-value">{row.empresa || '-'}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Cargo</span>
                      <span className="info-value">{row.cargo || '-'}</span>
                    </div>
                  </div>
                  <div className="card-message">
                    <span className="info-label">Mensagem</span>
                    <p>{row.mensagem || 'Sem mensagem.'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
