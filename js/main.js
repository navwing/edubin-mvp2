$(document).ready(function () {
  $(".single-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<button class="next-arrow slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow prev-arrow slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  });
});

$(document).ready(function () {
  $(".category-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:
      '<button class="slide-arrow next-arrow slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow prev-arrow slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  });
});

$(document).ready(function () {
  $(".testimonial-slides").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });
});

$(document).ready(function () {
  $(".patnar-logo-container").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
  });
});

const api = "https://60d4611a61160900173cb070.mockapi.io/courses";

function App() {
  getApi(printData);
}

App();

function getApi(callBack) {
  fetch(api, {
    method: "GET",
  })
    .then((res) => res.json())
    .then(callBack)
    .catch((err) => {
      console.log(err);
    })
    .finally(console.log("GET Data thanh cong !"));
}

function printData(returnData) {
  console.log(returnData);
  const printData = returnData.map((returnData) => {
    return `
    <div class="course-part-single-slide">
    <div class="course-part-img">
      <img src="${returnData.image}" />
    </div>
    <div class="course-part-cont">
      <div class="course-part-cont-rate">
        <ul>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
        </ul>
        <span>${returnData.rate}</span>
        <span>(${returnData.rate_quantity})</span>

      </div>
      <div class="course-time-number">
        <div class="course-time">
          <i class="fa-regular fa-user"></i>

          <span>${returnData.total_enrolled}</span>
        </div>
        <div class="course-number">
          <i class="fa-regular fa-clock"></i>
          <span>${returnData.duration}</span>
        </div>
      </div>


      <a href="courses-single.html" tabindex="-1">
        <h4>${returnData.name}</h4>
      </a>

      <div class="course-teacher">
        <div class="course-teacher-avt">
          <a href="#" tabindex="-1"><img src="images/image_icon/t-5.jpg" alt="teacher" /></a>
          <span>by</span>
          <span class="course-author">${returnData.teacher}</span>
          <span>in</span>
          <span class="course-author">${returnData.categories}</span>
        </div>

        <div class="course-buy">
          <p>${returnData.price}$</p>
          <div class="course-buy-container">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Get Enrolled</span>
          </div>
        </div>

      </div>
    </div>
  </div>
          `;
  });
  const printDataPlace = document.getElementById("111");
  printDataPlace.innerHTML += printData.join("");

  $(".slide-course").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:
      '<button class="next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button class="prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  });
}
