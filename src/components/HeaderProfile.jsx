import React, { Component } from 'react';
import { getUserInfo } from '../service/endPointsAPI'
import ProfileLoader from './ProfileLoader';
import './HeaderProfile.css';
import pin from '../images/pin.svg'

class HeaderProfile extends Component {
    state = {
        userInfo: {},
        loader: true,
    }
    
    async componentDidMount() {
        const data = await getUserInfo();
        console.log(data);
        const { followers: { total }, country, display_name, external_urls: { spotify }, images } = data;
        const urlImage = images[0].url;
        this.setState({ userInfo: { country, display_name, spotify, urlImage, total }, loader: false });
    }

  render() {
    const { userInfo, loader } = this.state;
    return (
      <header>
          {
            loader ? <ProfileLoader className="loader" /> : (
                <>
                    <figure>
                        <img src={ userInfo.urlImage } alt={ userInfo.display_name } />
                        <figcaption>{ userInfo.display_name }</figcaption>
                    </figure>

                    <div className="info-box">
                        <div>
                            <img src={ pin } alt="pin" />
                            <p>{ userInfo.country }</p>
                        </div>
                        <div>
                            <span>{ userInfo.total}</span>
                            <p>Seguidores</p>
                        </div>
                        <div>
                            <span>{ userInfo.total}</span>
                            <p>Seguindo</p>
                        </div>
                    </div>
                </>
            )
          }
          <hr />
      </header>
    )
  }
}

export default HeaderProfile