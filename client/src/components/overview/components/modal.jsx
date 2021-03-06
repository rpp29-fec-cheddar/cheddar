import React from 'react'
import Zoom from 'react-img-zoom'

let Modal = (props) => {
  let thumbnailArr, showSevenTNs, mainPhoto, zoomPhoto, rightArrow, leftArrow;
  if (props !== undefined) {
    thumbnailArr = props.thumbnails.map((element, i) => {
      return (
        <img
          className="OVModalThumbnail"
          height='100'
          width='120'
          key={i}
          src={props.thumbnails[i].thumbnail_url}
          onClick={e => {
            e.preventDefault()
            props.setShowModalPhotoZoom(false)
            props.setMainPhotoIndex('' + i)
          }}
          alt='Thumbnail' ></img>
      )
    })
  }
  let ii = props.thumbnailIndex;

  if (thumbnailArr.length <= 6) {
    showSevenTNs = thumbnailArr;
  } else if (thumbnailArr.length > 1) {
    while (showSevenTNs.length !== 6) {
      if (thumbnailArr[ii] === undefined) {
        ii = 0;
      }
    }
    showSevenTNs.push(thumbnailArr[ii])
    ii++;
  }

  if (props.showModalPhotoZoom === true) {

    leftArrow = <div></div>
    rightArrow = <div></div>
    showSevenTNs = <div></div>
    mainPhoto =
      <div
        className="ZoomDiv"
        onClick={e => {
          props.setShowModalPhotoZoom(false)
        }}
      >
        <Zoom
          className="ZoomIn"
          img={props.thumbnails[props.mainPhotoIndex].url}
          zoomScale={2.5}
          height={400}
          width={500}
        />
      </div>
  } else {

    leftArrow = <p
      onClick={e => {

        if (props.mainPhotoIndex === '0') {
          props.setMainPhotoIndex(props.thumbnails.length - 1)
          props.setShowModalPhotoZoom(false)
        } else {
          props.setMainPhotoIndex((Number(props.mainPhotoIndex) - 1) + '')
          props.setShowModalPhotoZoom(false)
        }
      }}
    >{'<'}</p>

    rightArrow = <p
      onClick={e => {

        if (Number(props.mainPhotoIndex) !== props.thumbnails.length - 1) {
          props.setMainPhotoIndex((Number(props.mainPhotoIndex) + 1) + '')
          props.setShowModalPhotoZoom(false)
        } else {
          props.setMainPhotoIndex('0')
          props.setShowModalPhotoZoom(false)
        }
      }}
    >{'>'}</p>
    mainPhoto = <img
      className="mainModalPhoto"
      onClick={e => {
        props.setShowModalPhotoZoom(true)
      }}
      height="400"
      width="300"
      src={props.thumbnails[props.mainPhotoIndex].url}></img>
  }

  // }

  if (props.showModal === true) {
    return (
      <div
        onClick={e => {
          props.clickModal()
        }}
        className="OVmodal">
        <div onClick={e => { }} className="OVmodal-content">
          <div className="OVmodal-header">
            <h4 className="OVmodal-title"></h4>
          </div>
          <div className="OVmodal-body">
            {mainPhoto}
            <div className="OVModalArrows">

              {leftArrow}
              {rightArrow}
            </div>

            <br></br>
            <div className="OVModalThumbnailContainer">
              {showSevenTNs}
            </div>
          </div>
          <div className="OVmodal-footer">
            <button onClick={e => {
              props.setShowModal(false)
              props.setShowModalPhotoZoom(false)
            }} className="OVmodal-button">Close</button>
          </div>
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}



export default Modal;