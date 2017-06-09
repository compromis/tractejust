import React from 'react';

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
        </div>
      </div>
    );
  }
}

export default Video;
