import React, { Component } from 'react';
import CardIllustration from '../components/CardIllustration';
import Top3Artists from '../components/Top3Artists';
import Top3Musics from '../components/Top3Musics';
import './Profile.css';
import illustration03 from '../images/illustration-03.svg';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const { user: { name } } = this.props;
    return (
      <>
      <main className="main-general">
        <CardIllustration
          title={`Olá ${name && name.split(' ')[0]}, esse é o seu TOP 3 artistas e músicas`}
          description="Os dados abaixo são dos últimos 6 meses, para acessar a lista com seleção de período, clique no menu acima!"
          url={ illustration03 }
        />
        <Top3Artists />
        <Top3Musics />
      </main>
      </>
    )
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Profile);