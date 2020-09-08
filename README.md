# Board

> ## EJS 자주 사용하는 함수.

1. **데이터를 화면에 표시**

   <%= 변수명%>

   ```
   <span date-date="<%= post.createAt %>"></span>
   ```

2. **조건문, 반복문**

   <% if (조건) { %>

   ...html 소스

   <% } else { %>

   ... html 소스

   <% } %>

   <% for (조건) { %>

   ... html 소스

   <% } %>

   ```
   <% if(posts == null || posts.length == 0) { %>
                   <tr>
                       <td colspan="2">Ther is no date to show :(</td>
                   </tr>
               <% } %>
               <% posts.forEach(function(post) { %>
               <tr>
                   <td>
                       <a href="/posts/<%= post._id %>"><div class="ellipsis"><%= post.title %></div></a>
                   </td>
                   <tr class="date">
                       <span date-date="<%= post.createAt %>"></span>
                   </tr>
               </tr>
               <% }) %>
   ```

3. **include**

   <% include 'include할 ejs파일 경로/이름' %>

   ```
   <!DOCTYPE html>
    <html>
        <head>
            <%- include('../partials/head') %>
        </head>
        <body>
            <%- include('../partials/nav') %>
        </body>
    </html>
   ```

> ## Regex

```
/^.{4,12}$/ : regex는 / /안에 작성합니다. 즉 / /를 통해 이게 regex임을 알수 있습니다.
/^.{4,12}$/ : ^는 문자열의 시작 위치를 나타냅니다.
/^.{4,12}$/ : .는 어떠한 문자열이라도 상관없음을 나타냅니다.
/^.{4,12}$/ : {숫자1,숫자2}는 숫자1 이상, 숫자2 이하의 길이 나타냅니다.
/^.{4,12}$/ : $는 문자열의 끝 위치를 나타냅니다.
```
