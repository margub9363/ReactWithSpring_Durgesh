package com.springrest.springrest.controller;

import com.springrest.springrest.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.springrest.springrest.services.CourseService;

import java.util.List;

@RestController
public class MyController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/hello")
    public String home(){
        return "Welcome to Courses Application";
    }

    //get the courses
    @GetMapping("/courses")
    public List<Course> getCourses() {
    return this.courseService.getCourses();
    }

    @GetMapping("/course/{courseId}")
    public Course getCourse(@PathVariable String courseId){
        return this.courseService.getCourse(Long.parseLong(courseId));
    }
}
