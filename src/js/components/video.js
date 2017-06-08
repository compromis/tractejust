import React from 'react';
import ReactFBLike from 'react-fb-like';

class Video extends React.Component {

  render() {
    return (
      <div className="block video">
        <div className="video--responsive">
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoaliciocompromis%2Fvideos%2F1598698620160037%2F&show_text=0&width=560"
            width={560}
            height={560}
            scrolling="no"
            frameBorder="0"
            allowTransparency={true}
            allowFullScreen={true}></iframe>
            <p>Comparteix...</p>
        </div>

        {/*}<div className="video__share">
          <ReactFBLike language="es_ES" appId="252515324782640" version="v2.8" href="http://tractejust.org" layout="button_count" action="like" size="small" showFaces="false" share="true" />
          <a href="https://twitter.com/share" className="twitter-share-button" data-text="Test" data-hashtags="TracteJust" data-related="compromis" data-lang="es" data-dnt="true" data-show-count="false">Tweet</a>
        </div>*/}
      </div>
    );
  }
}

export default Video;
