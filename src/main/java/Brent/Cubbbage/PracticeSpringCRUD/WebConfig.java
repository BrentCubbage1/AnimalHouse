//package Brent.Cubbbage.PracticeSpringCRUD;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class WebConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/DogLanding/**")
//                .addResourceLocations("classpath:/static/DogLanding/");
//    }
//}


/** I made a WebConfig class because I thought my app would not serve out of
 * the DogLanding since it was not directly in resources/static.
 * Turns out my .js file was just incorrect and this is not needed. 
 */