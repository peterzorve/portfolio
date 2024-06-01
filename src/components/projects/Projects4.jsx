// import data from "../../data/index.json";
import data from "../../assets/data/index.json"
import "./Projects2.css"
import img_1 from "../../assets/projects/placeholder-image-1.png"

const Projects4 = () => {
  return (
    <div className="portfolio--section">

      <div className="portfolio--section--container">
          <a href="https://github.com/peterzorve/deep-learning-oxford-102-flower-classification/blob/main/classifications.ipynb" target="_blank">
            <div className="other-view">
                <h3 className="other-projects">Oxfold 102 Flower Classification</h3>
            </div>
          </a>
          <a href="https://github.com/peterzorve/deep-learning-semantic-analysis/blob/main/project.ipynb" target="_blank">
            <div className="other-view">
                <h3 className="other-projects">Semantic Analysis</h3>
            </div>
          </a>
          <a href="https://github.com/peterzorve/3.3.__Deep_Learning__Regression/blob/main/train.ipynb" target="_blank">
            <div className="other-view">
                <h3 className="other-projects">Regression-Based Project</h3>
            </div>
          </a>
      </div>

      <div className="portfolio--section--container">
          <a href="https://github.com/peterzorve/deep-learning-binary-classification/blob/main/train_binary_classification.ipynb" target="_blank">
            <div className="other-view">
                <h3 className="other-projects">Binary-Based Classification</h3>
            </div>
          </a>
          <a href="https://github.com/peterzorve/deep-learning-computer-vision/blob/main/computer_vision.ipynb" target="_blank">
            <div className="other-view">
                <h3 className="other-projects">Computer Vision Project</h3>
            </div>
          </a>
      </div>

    </div>
  );
}

export default Projects4
