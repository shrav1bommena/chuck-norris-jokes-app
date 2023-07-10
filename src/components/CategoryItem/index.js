/* eslint-disable react/no-unescaped-entities */
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const CategoryItem = props => {
  const {categoryName, jokeText, getJokeText} = props
  const categoryItem = categoryName[0].toUpperCase() + categoryName.slice(1)

  const onClickJoke = () => {
    getJokeText(categoryName)
  }

  return (
    <>
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <li
              onMouseDown={onClickJoke}
              className="category-item trigger-button"
            >
              <h1 className="joke-category-title">{categoryItem}</h1>
              <p className="joke-category-desc">
                Unlimited Jokes on {categoryItem}
              </p>
            </li>
          }
        >
          {close => (
            <div className="modal-div">
              <div className="modal-div-top-section">
                <h1 className="modal-div-top-section-category">
                  {categoryItem}
                </h1>

                <button
                  type="button"
                  className="trigger-button modal-div-top-section-close-button"
                  onClick={() => close()}
                >
                  X
                </button>
              </div>
              <div className="modal-div-joke-section">
                <p className="joke-text">"{jokeText}"</p>
                <div className="next-joke-button-div">
                  <button
                    className="next-joke-button"
                    onClick={onClickJoke}
                    type="button"
                  >
                    Next joke
                  </button>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  )
}

export default CategoryItem
