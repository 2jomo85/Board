Board
=====


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