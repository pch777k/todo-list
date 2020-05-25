package com.pch777.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pch777.todolist.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}
