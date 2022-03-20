import React, { Component } from 'react';
import logoStats from '../images/logo.svg';
import './AboutStats.css';
import { getUserInfo } from '../service/endPointsAPI';
import { connect } from 'react-redux';
import { sendUserInfo } from '../redux/actions';

class AboutStats extends Component {
  state = {
    name: '',
    urlImage: '',
  }

  async componentDidMount() {
    const { sendUser } = this.props;
    const { display_name, images } = await getUserInfo();
    this.setState({ name: display_name, urlImage: images[0].url });
    const infoUser = { name: display_name, urlImage: images[0].url };
    sendUser(infoUser);
  }

  render() {
    const { name } = this.state;
    return (
      <article className="aboutStats" >
          <div>
            <p>Olá <span>{name}</span>, aqui está o seu <span>TOP 3</span> a partir da suas estatisticas.</p>
            <p>Quer criar uma playlist com todas as músicas que você mais escutou? <span>Clique aqui!</span></p>
          </div>
          <hr />
      </article>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendUser: (info) => dispatch(sendUserInfo(info)), 
})

export default connect(null, mapDispatchToProps)(AboutStats);