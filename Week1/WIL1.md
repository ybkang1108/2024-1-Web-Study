## Web-Study WIL1

### HTML
#### Hypertext Markup Language, 웹 페이지를 만드는 데 사용
<img src="/Week1/structure.jpg" width="30%" alt="HTML structure">

```
<!DOCTYPE html>     // 브라우저에 해당 문서가 HTML임을 명시
<html>
<head>              // 브라우저가 해당 문서를 해석하는데 필요한 metadata표기
    <title>page_title</title>
</head>
<body> // 브라우저에 표시될 영역
    <h1>title</h1>
    <p>body</p>
</body>
</html>
```

- 열린 태그<> 와 닫힌 태그</> 사이에 콘텐츠를 위치하여 문서의 구조를 표현할 수 있음
    + `<h1>`~`<h6>`, `<p>`, `<button>`, `<img>`, `<input>` 등
    
### CSS
#### Cascading Style Sheets, HTML요소를 다양한 스타일로 디자인할 수 있음

```
h1 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: blue;
    text-align: center;
}
```

- 셀렉터(Selector): 스타일을 지정할 HTML요소 선택(h1)
    * HTML 태그 이외에도 #을 이용하여 특정 요소에 지정된 id에 따라 스타일을 지정하거나 .을 이용해 class를 공유하는 특정 요소의 스타일을 지정할 수 있음
- 선언 블록(Declaration): 셀렉터에서 선택한 요소에 대한 스타일을 지정(중괄호 안의 내용)
    
### HTML에 CSS적용하는 법
1. Inline Style   
HTML 태그 내에 style 속성을 이용하여 CSS 지정   

2. Internal Stylesheet   
`<head>`태그 내에 `<style>`태그를 삽입하고 해당 태그 사이에 CSS 문법 작성   

```    
<head>
    <style>
        h1 {
            color: blue;
            text-align: center;
        }
    </style>
</head>
```

3. External Stylesheet   
`<head>`태그 내에 `<link>`태그를 삽입하여 HTML문서에 CSS연결  

```
<head>
    <style>
        <link rel="stylesheet href="/style.css">
    </style>
</head>
```
    
---
### 과제 사진
###### <img src="/Week1/web_study.jpg" width="70%" alt="screenshot"></img>