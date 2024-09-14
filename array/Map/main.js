var course = [
  {
    id: 1,
    name: "JavaScript",
    coin: 0,
  },
  {
    id: 2,
    name: "Html/css",
    coin: 2,
  },
  {
    id: 3,
    name: "Java",
    coin: 3,
  },
  {
    id: 4,
    name: "C++",
    coin: 4,
  },
];
function CourseHandler(course,index) {
  console.log(course);

  return {
    index:index,
    id: course.id,
    name: `Khóa học: ${course.name}`,
    coin: course.coin,
    coinText: `Giá tiền: ${course.coin}`,
  };
}
var newCourses = course.map(CourseHandler);
console.log(newCourses);
