import Img1 from "./img1.jpg";
import Img2 from "./img2.jpg";
import Img3 from "./img3.png";

export default class ImageCarousel {
  carouselImages = [Img1, Img2, Img3];
  currentImageIndex = 0;
  CreateCarousel() {
    let frame = document.querySelector(".image_carousel_picture_frame");

    let image1 = document.createElement("img");
    image1.setAttribute("id", "image_carousel_img1");
    image1.src = this.carouselImages[0];
    frame.appendChild(image1);

    let image2 = document.createElement("img");
    image2.setAttribute("id", "image_carousel_img2");
    image2.style.opacity = "0%";
    image2.src = this.carouselImages[1];
    frame.appendChild(image2);

    let image3 = document.createElement("img");
    image3.setAttribute("id", "image_carousel_img3");
    image3.src = this.carouselImages[2];
    image3.style.opacity = "0%";
    frame.appendChild(image3);

    let nextButton = document.querySelector("#next_button");
    nextButton.addEventListener("click", () => this.NextImage());

    let previousButton = document.querySelector("#previous_button");
    previousButton.addEventListener("click", () => this.PreviousImage());

    setTimeout(() => this.NextImage(), 2000);
  }
  NextImage() {
    let image1 = document.querySelector("#image_carousel_img1");
    let image2 = document.querySelector("#image_carousel_img2");
    let image3 = document.querySelector("#image_carousel_img3");
    let imageNodesArray = [image1, image2, image3];

    if (this.currentImageIndex == this.carouselImages.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }

    for (let i = 0; i < this.carouselImages.length; i++) {
      if (i == this.currentImageIndex) {
        imageNodesArray[i].style.opacity = "100%";
      } else {
        imageNodesArray[i].style.opacity = "0%";
      }
    }

    this.CircleManager(this.currentImageIndex);
  }
  PreviousImage() {
    let image1 = document.querySelector("#image_carousel_img1");
    let image2 = document.querySelector("#image_carousel_img2");
    let image3 = document.querySelector("#image_carousel_img3");
    let imageNodesArray = [image1, image2, image3];

    if (this.currentImageIndex == 0) {
      this.currentImageIndex = this.carouselImages.length - 1;
    } else {
      this.currentImageIndex--;
    }

    for (let i = 0; i < this.carouselImages.length; i++) {
      if (i == this.currentImageIndex) {
        imageNodesArray[i].style.opacity = "100%";
      } else {
        imageNodesArray[i].style.opacity = "0%";
      }
    }

    this.CircleManager(this.currentImageIndex);
  }
  CircleManager(activeImageIndex) {
    let image1circle = document.querySelector("#image1_circle");
    let image2circle = document.querySelector("#image2_circle");
    let image3circle = document.querySelector("#image3_circle");
    let imageCircles = [image1circle, image2circle, image3circle];

    image1circle.textContent = "◦";
    image2circle.textContent = "◦";
    image3circle.textContent = "◦";

    imageCircles[activeImageIndex].textContent = "•";
  }
}
