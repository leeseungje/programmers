/* 
    문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, overwrite_string, s) {
    const first = my_string.slice(0, s);
    const end = my_string.slice(s + overwrite_string.length);
    const result = first + overwrite_string + end;

    return result;
}

/* 
    s값부터 overwrite_string.length 값까지 잘라서 overwrite_string 값으로 변경 하는 문제였는데 살짝 어려웠는데 재미있는 문제였다.
*/
