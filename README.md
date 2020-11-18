# FEST Project

  The assignment that I was given by FEST was to make 5 pages, which would in the end be connected. A loading screen which would take you to the dark-themed landing page. From here you can read about the page, which is a job finding page, like Glassdoor. On the landing page, there is a sign-in button which takes you to the login page. Here you can log in with Facebook, Google, Twitter or if you made an account, with the email and password. There is also the possibility to register with an email and password. 
  
  After successfully login in, you are taken to the portfolio page. Here in theory you would be able to create your portfolio, showing your projects, skills and write a bit about yourself. On this page, there is a button that takes you to the job platform page. On this page, you can search for jobs by some criteria.
  
  More information on how each of the pages was made:
  
  # Loading Page
  
  The loading page was not very hard to make. I looked for some inspiration on the internet and I have found an easy loader to us (https://loading.io/css/). After that, I only added the 'logo of FEST', which I have created for this project, background colour and the word 'Loading...' with the dots animated. 
  
  I mostly used HTML and CSS for this page.

# Dark Themed Landing Page

  The landing page was designed with darker colours in mind. Also, the other pages were made based on these darker colours, which I have reused and tweaked. The bigger elements, such as the images, of the companies that are featured and some description, are animated. This was done with a script (https://michalsnik.github.io/aos/) which makes it possible to fade in, zoom in, fade out etc. elements.

  The images that were used were taken from a website which offers free SVG for web developers (https://undraw.co/illustrations). All the buttons and links are hoverable and they take you to the desired page or part of the current page. 
  
   This page was a little difficult to make since is a larger page. All the positioning, colours and styling of the elements took quite some time to make. 
   
   The page was also adapted for mobile devices, though it is not perfect, it is working as intended and is also visually appealing. Multiple breakpoints were created for this to be possible.
   
# Login Page
  
  Upon clicking the sign-in button on the landing page you are taken here, to the login page. This was also designed based on darker colours. The same animation script was used to create the fading up of the login/sign up tab.
  
  There were some SVG's used for the page for the corners. Like the landing page, all the hoverable elements are working as intended.
  
  The left tab, which has a welcome message and a description, also has a sign in / sign up button, which depending on what the user wants, changes the right side.
  
  The right tab contains the signup/sign-in button, for the email and password option and the Google, Facebook or Twitter login. The way the Google, Facebook and Twitter login was made was with the FireBase API (https://firebase.google.com/). FireBase allows developers to use their databases, cloud functions, authentication and many more. This has helped me a lot because all the logins, sign-ups and the checks if the user is logged in, were done using the API. Unfortunately, there are some problems. Facebook and Twitter sign-ins do not work properly. This is because signing in with these platforms needs their own API / Secret keys, which requires me to give some descriptions and send some emails in order to obtain. If it was not for these issues, all the sign-ins would have worked perfectly. Also, if the user signs in with some random email and password, it does not allow the user to go to any other pages and it is granted with an error message. This is another feature of the Firebase API.
  
  The time that it took to make this page was quite a long time. It was the first time working with an API like Firebase and it was a challenge. In the end, all the pages work with the Firebase API, checking if the user is logged in or not. If the user is not logged in, he is taken to the landing page.
  
  There is also the mobile adaptation of the page, which gets rid of the left tab and makes the right one the main element and it also adds a sign-in button.
  
# Portfolio Page

  After signing in, you are taken to the portfolio page. The design of the page is more complex. Animations were used for this page. When scrolling, the page fully scrolls smoothly to the next section of the page. This was done with a script, which allows the developer to create scroll points on the page and also it adds a small menu on the left. (https://github.com/alvarotrigo/fullpage.js)
  
  The page contains an image of the user, information about the user, the user's skills and their level, some of the recent projects and a contact form.
  
  The styling that went into the page is complex, there are more colours used, some elements are absolutely positioned to give a more aesthetic look and also the page follows a colour pattern. It starts with a dark navigation with a greyish background to the page, after which the greyish colour continues and it ends with the same dark colour of the navigation. As I have said, the colour palette is kept, with darker colours being used on the whole page.
  
  The time this whole page took was the one that took the most. I always loved making everything be positioned perfectly and with this page, I believe that I have nearly achieved that. Depending on the size of the screen, the page has breakpoints and so it would adapt to that. It was quite hard to make it look the same on all screens. It looks quite similar in the range of 1000px and up, but then it was adapted for smaller screens so it does look different under 1000px.
  
# Job Platform Page

  As I have said, the portfolio page contains a button which takes you to the next page, the job platform page. This was quite interesting to make because it has some complexity to it. The styling of the page is not to complex, but the way that it works is complex. There were given two options for making the page work, either with data attributes or with a JSON file. I have chosen the JSON file method.
  
  After searching up how I would be able to implement this, I found a good JSON file to use as fake data. After looking over the JSON file, I started styling a static element, which afterwards would be used for all the 'jobs' from the file. Using this method also gives me the possibility of actually using a database to pull the information from. After being able to add all the 'jobs' to the page dynamically, I started working on the filtering. In the description of the assignments, I was told to give a different way of filtering for the jobs. The file provided the role, level, tools and languages for each job. The way that the filtering algorithm works is every time you click on one of the filter options, it adds it to the search bar first of all, and after that it searches through the JSON file, checking if the job has the filter that the user is looking for if not, the job is hidden. Also, there is the possibility of deleting any filter and the algorithm checks again and if there is a hidden element that now matches the search parameters, then the element is shown.
  
  The algorithm checks if all the filters criteria are met and so it only shows the 'jobs' that have all the filters.
  
  There is also a sign out button. which signs the user out and redirects him to the landing page.
  
  This page tested the way that I was thinking about searching algorithms and the way of creating elements and appending them to each other through jQuery. The page took a good amount of time, because I did not know how to create the data for the 'jobs' and also after finding the file I had to think how to implement it on the page.
  
# Conclusion
  
  In conclusion, it was a complex project, which took 4 days, and an extra day over the deadline. This extra time was taken because we had to sign off some exercises for university and also had some work for a group project. I am really sorry for delaying so much, but I hope you will consider the assignments. It was the first time when I have taken so much time to style, examine and think of the ways I would be able to implement everything. 
  
  I believe that the project is not perfect, because it is still missing some functionalities that were asked for, such as the ability to edit the portfolio, to upload the picture to the portfolio, to add a job to favourites and a few others bugs that have intervened. Still, it is a good example of what I am capable of and what I can achieve in this amount of time and I believe that in many ways it was made well and I hope that you believe too. 
