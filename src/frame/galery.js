import React from "react";
import { MOCK_PICTURES } from "./mock-pictures";
import { PictureHandlerButtons } from "./picture-handler-buttons";
import { SmallPicture, BigPictureContainer } from "../picture-displayers";

export default class Galery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [...MOCK_PICTURES],
      newPictureSource: "",
      newPictureAlt: "",
      bigPicture: null,
      commentTyped: "",
      modifyPicture: false,
    };

    this.changePicture = this.changePicture.bind(this);
    this.showPicture = this.showPicture.bind(this);
    this.sendComment = this.sendComment.bind(this);
    this.commentChange = this.commentChange.bind(this);
    this.deletePicture = this.deletePicture.bind(this);
    this.modifyPicture = this.modifyPicture.bind(this);
    this.newImageSourceHandler = this.newImageSourceHandler.bind(this);
    this.newImageAltHandler = this.newImageAltHandler.bind(this);
    this.sendImage = this.sendImage.bind(this);
    this.setModifyPicture = this.setModifyPicture.bind(this);
  }

  newImageSourceHandler(event) {
    this.setState({ newPictureSource: event.target.value });
  }

  newImageAltHandler(event) {
    this.setState({ newPictureAlt: event.target.value });
  }

  setModifyPicture() {
    this.setState({ modifyPicture: false });
  }

  sendImage() {
    this.addPicture({
      author: localStorage.getItem("userName"),
      alt: this.state.newPictureAlt,
      createdAt: new Date(),
      src: this.state.newPictureSource,
      comments: [],
    });
    if (this.state.modifyPicture) {
      setTimeout(() => this.deletePicture(this.state.bigPicture));
    }
    this.setState({ newPictureSource: "", newPictureAlt: "" });
  }

  addPicture(picture) {
    let pictures;
    if (this.state.pictures.length > 0) {
      picture.index =
        this.state.pictures[this.state.pictures.length - 1].index + 1;
      pictures = this.state.pictures.slice();
    } else {
      pictures = [];
      picture.index = 0;
    }
    pictures.push(picture);
    this.setState({ pictures });
  }

  deletePicture(index) {
    const pictures = this.state.pictures.slice();
    if (this.state.bigPicture === this.state.pictures.length - 1) {
      this.showPicture(this.state.bigPicture - 1);
    }
    if (pictures.length - 1 === 0) {
      this.showPicture(null);
    }
    pictures.splice(
      pictures.findIndex((picture) => {
        return picture.index === index;
      }),
      1
    );
    this.setState({ pictures });
  }

  modifyPicture(index) {
    this.setState({
      newPictureSource: this.state.pictures[index].src,
      newPictureAlt: this.state.pictures[index].alt,
      modifyPicture: true,
    });
  }

  changePicture(direction) {
    direction === "left"
      ? this.showPicture(this.state.bigPicture - 1)
      : this.showPicture(this.state.bigPicture + 1);
  }

  showPicture(index) {
    this.setState({ bigPicture: index });
  }

  sendComment() {
    const pictures = this.state.pictures.slice();
    const comments = this.state.pictures[
      this.state.bigPicture
    ].comments.slice();

    const comment = {
      author: localStorage.getItem("userName"),
      comment: this.state.commentTyped,
      createdAt: new Date(),
    };
    comments.push(comment);
    pictures[this.state.bigPicture].comments = comments;
    this.setState({ pictures, commentTyped: "" });
  }

  commentChange(event) {
    this.setState({ commentTyped: event.target.value });
  }

  renderSmallPictures() {
    return this.state.pictures.map((picture) => (
      <SmallPicture
        key={picture.index}
        picture={picture}
        onClick={this.showPicture}
      />
    ));
  }

  disabledButton() {
    if (this.state.bigPicture === 0 && this.state.pictures.length === 1) {
      return "both";
    } else if (this.state.bigPicture === 0) {
      return "left";
    } else if (this.state.bigPicture === this.state.pictures.length - 1) {
      return "right";
    } else {
      return null;
    }
  }

  isMyPicture() {
    return (
      this.state.bigPicture !== null &&
      this.state.pictures[this.state.bigPicture].author ===
        localStorage.getItem("userName")
    );
  }

  render() {
    return (
      <div>
        {this.state.bigPicture === null ? (
          this.renderSmallPictures()
        ) : (
          <BigPictureContainer
            picture={this.state.pictures[this.state.bigPicture]}
            disabled={this.disabledButton()}
            changePicture={this.changePicture}
            sendComment={this.sendComment}
            commentChange={this.commentChange}
            commentTyped={this.state.commentTyped}
          />
        )}
        <PictureHandlerButtons
          isMyPicture={this.isMyPicture()}
          bigPicture={this.state.bigPicture}
          deletePicture={this.deletePicture}
          modifyPicture={this.modifyPicture}
          imageSource={this.state.newPictureSource}
          imageSourceHandler={this.newImageSourceHandler}
          imageAlt={this.state.newPictureAlt}
          imageAltHandler={this.newImageAltHandler}
          sendImage={this.sendImage}
          setModifyPicture={this.setModifyPicture}
          showPicture={this.showPicture}
        />
      </div>
    );
  }
}
