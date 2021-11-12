# CarWorld car sale

My project site link: (https://car-world-9db38.web.app/).

## Simple React Project

In the project, I try to build MPA using react-router, context api, firebase for authentication, used css framework bootstrap for responsive site and mongodb and express for database.

### React authentication and database

In the project, I try to authenticate users by email & password. I used firebase authentication approach. I also do private route authentication for specific page. Then i used node js, express js for server side and mongodb for database side.

### Context Api, Custom hook, nested route

In the project, I used one custom hook for firebase authentication approaches. Then lastly i used alternative of custom hook, context api for whole app control. Context api used custom hooks data and handle all code easily from app. 
Mainly i used router for all page routing, then i used nesting route from react router for admin and normal users excess from dashboard sidebar.

### My project Concepts and features

I try to build a simple react MPA based on CarWorld Car selling related site. In my project, Header section shows navigation of home,explore,login first, then after login user logout,dashboard link show with logged user name. Header and Footer section is same for all main route. Body section will change depending on page switch. In home page, At first top section start with title and banner then there are six cards of car sell. When click any card buy now button it will navigate to another page for more details and booking form. Details page is private route, after login user can show all details.In home page popular brand section and review section also exist. Explore route show all of cars in stock.
Dashboard link is private route, when any user click it show four nesting route.These are my orders,add review,payment and logout button. My order route show user all orders, add review where user can add review about site using form,payment route not completed yet.Then when any admin is login with specific email address, dashboard will show different four route.Here, Make admin route, where admin can give role as admin to any user. In add new service page, it is also mainly handle by page admins they can add any new service in explore page using form.In manage products route, admin can remove product from products collection.In manage all orders page, they can see all booked services,they can remove any service and order status can update using approve button.Lastly for authentication login option here, user can use email,password for login After user login their name will appear in header section. 
We did not used fake data here. we directly used data from mongodb database. User when try to visit any page that does not exist site will show 404 error.

In future, I will try to add more features in site and update my MPA.
