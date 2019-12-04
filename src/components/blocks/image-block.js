import React from "react";

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        src={this.props.src}
        style={{
          maxWidth: this.props.width,
          width: "100%"
        }}
      />
    );
  }
}

export default ImageBlock;
