//처음

var intervalIntersection = function (firstList, secondList) {
  let newArr;
  let Ai = 0;
  let Bi = 0;

  //the condition if there is an overlapping
  while (
    firstList[Ai][1] > secondList[Bi][0] &&
    firstList[Ai][0] > secondList[Bi][1]
  ) {
    
    //need to push this array
    let max = Math.max(firstList[Ai][0], secondList[Bi][0]);
    let min = Math.min(firstList[Ai][1], secondList[Bi][1]);

    newArr.push([max, min]);

    if (firstList[Ai][1] < secondList[Bi][1]) {
      Ai++;
    } else {
      Bi++;
    }
  }

  console.log(newArr);
};

//// 내것

var intervalIntersection = function (firstList, secondList) {
  let newArr = [];
  let Ai = 0;
  let Bi = 0;

  while (Ai < firstList.length && Bi < secondList.length) {
    //각 숫자로 destructuring 하기
    let [start0, end0] = firstList[Ai];
    let [start1, end1] = secondList[Bi];

    if (end0 >= start1 && end1 >= start0) {
      // 두 구간이 겹치는 경우
      newArr.push([Math.max(start0, start1), Math.min(end0, end1)]);
    }

    //간격을 최소화하려면 이렇게 해야 한다
    if (end0 < end1) {
      Ai++;
    } else {
      Bi++;
    }
  }

  return newArr;
};
