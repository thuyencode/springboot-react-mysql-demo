# React + Spring Boot demo project

<https://github.com/thuyencode/springboot-react-mysql-demo/assets/134030308/03e617b3-10a2-4541-9fea-79f16677933a>

I did this project following [Code With Arjun](https://www.youtube.com/@CodeWithArjun)'s tutorials on Youtube: **[Full Stack Spring Boot and React CRUD 1.5 hours Course | Full Stack Web App | MySQL | Hibernate](https://youtu.be/4LZKnegAm4g)**.

Some improvements:

* Data validation on both the client (using [Valibot](https://valibot.dev)) and server side
* Validation errors sent from the server side can be shown on form
* Use [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com) instead of Bootstrap 🗿
* The code looks cleaner to me (very objective, I know)

## Tech stack

| Backend | Frontend |
| :-: | :-:  |
| [![Backend](https://skillicons.dev/icons?i=java,spring,hibernate,mysql)](https://skillicons.dev) | [![Backend](https://skillicons.dev/icons?i=ts,vite,react,tailwind)](https://skillicons.dev) |

## How to run

### Frontend

```bash
cd frontend
bun i
bun dev
```

### Backend

If you have installed [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack) you can run the Spring Boot easily in VSCode, if not then make sure you have Maven installed:

```bash
cd backend
mvn spring-boot:run
```

You may need to change the URL in the `@CrossOrigin` annotation in the [`UserController.java`](./backend/src/main/java/com/github/thuyencode/springboot_react_mysql_demo/backend/controllers/UserController.java) file according to your Vite dev server.

And don't use root account to access the database, I did it because I encountered some bugs from MySQL Docker. Change how the backend connect to the database in [application.properties](./backend/src/main/resources/application.properties).
