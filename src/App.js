import './App.css';
import React, {Component} from 'react';
import Comentario from './components/Comentario'

class App extends Component {

  state={
    comentarios :[
      {
        // se aqui tiver um id nao precisa do key:{indice} abaixo
        nome: 'Joao',
        email: 'joao@email.com',
        data: new Date(2022, 8, 2, 17, 30, 0),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@email.com',
        data: new Date(2022, 6, 5, 18, 40, 0),
        mensagem: 'Oi, tudo bem?'
      },
    
    ],
    novoComentario: {
      nome:'',
      email: '',
      mensagem:''
    }
  }

  adicionarComentario = evento =>{

    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '', email: '', mensagem: ''}
      
    })

    // console.log(novoComentario)
  }

  removerComentario = comentario =>{
    let lista = this.state.comentarios;
    lista = lista.filter(c=>c !== comentario)

    this.setState({comentarios: lista})
  }


  digitacao = evento =>{
    // const value = evento.target.value
    // const name = evento.target.name
    const {name, value} = evento.target
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }
 
  
  render(){
    return (
    <div className="App">
      <h1>Meu Projeto</h1>

      {/* acessando o array */}
      {this.state.comentarios.map((comentario, indice) =>(
        <Comentario 
        key={indice}
        nome={comentario.nome} 
        email={comentario.email}  
        data={comentario.data} 
        onRemove={this.removerComentario.bind(this, comentario)}>
        {comentario.mensagem}
      </Comentario>
      ))}

      {/* <button onClick={this.adicionarComentario}>Adicionar comentário</button> */}

      <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
        <h2>Adicionar comentário</h2>
        <div>
          <input 
          type="text" 
          name="nome" 
          value={this.state.novoComentario.nome}
          onChange={this.digitacao}
          placeholder="Digite seu nome"
          required/>
          
        </div>
        <div>
          <input 
          type="email" 
          name="email" 
          onChange={this.digitacao}
          placeholder="Digite seu email"
          required/>
        </div>
        <div>
          <textarea 
          name="mensagem" 
          onChange={this.digitacao}
          rows="4"
          required/>
        </div>
        <button type="submit">Adicionar comentário</button>
      </form>

    </div>

    );
}
}

export default App;
