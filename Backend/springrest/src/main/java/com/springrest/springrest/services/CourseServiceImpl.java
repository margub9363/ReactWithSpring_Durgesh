package com.springrest.springrest.services;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl {

    @Autowired
    CourseDao courseDao;

    public List<Course> getCourses() {
        return this.courseDao.findAll();
    }

    public Course getCourse(long courseID) {
        return this.courseDao.findById(courseID).get();
    }

    public Course addCourse(Course course) {
        this.courseDao.save(course);
        return course;
    }

    public Course updateCourse(Course course) {
        this.courseDao.save(course);
        return course;
    }

    public void deleteCourse(long parseLong) {
        Course byId = this.courseDao.getReferenceById(parseLong);
        this.courseDao.delete(byId);
    }
}
