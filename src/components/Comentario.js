import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import{ptBR} from 'date-fns/locale'

import './Comentario.css';
import imagemUsuario from './user.png'


// em geral componente comeca com letra maiuscula
const Comentario = props =>{
    const estilo ={
        color: 'rgb(37, 37, 128)',
        fontSize: '1.2rem',
        marginTop: '0.5rem'
    }

    return <div className="Comentario">
        <img class="avatar" src={imagemUsuario} alt={props.nome}/>
        
        <div class="conteudo">
            <h2 style={estilo}>{props.nome}</h2>
            <p class="email">{props.email}</p>
            <p class="mensagem">{props.children}</p>
            <button onClick={props.onRemove}>&times;</button>
            <p class="data">{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
        </div>
    </div>
};

export default Comentario;