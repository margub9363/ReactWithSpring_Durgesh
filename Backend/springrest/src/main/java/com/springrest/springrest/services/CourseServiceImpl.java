package com.springrest.springrest.services;

import com.springrest.springrest.entities.Course;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService{

    List<Course> list;

    public CourseServiceImpl() {
        list = new ArrayList<>();
        list.add(new Course(145,"Java core course","this course contains basic of java"));
        list.add(new Course(146,"Spring Boot Course","Creating Rest Api using SpringBoot"));
    }

    @Override
    public List<Course> getCourses() {
        return list;
    }
}
