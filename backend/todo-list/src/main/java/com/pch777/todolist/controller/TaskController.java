package com.pch777.todolist.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pch777.todolist.model.Task;
import com.pch777.todolist.repository.TaskRepository;

@RestController
@RequestMapping("api/tasks")
@CrossOrigin("http://localhost:4200")
public class TaskController {
	
	private TaskRepository taskRepository;

	public TaskController(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}
	
	@GetMapping()
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Task getTask(@PathVariable Long id) {
		return taskRepository.findById(id).get();
	}
	
	@GetMapping("/completed")
	public List<Task> getAllCompletedTask() {
		return taskRepository.findAll()
							 .stream()
							 .filter(task -> task.isCompleted() == true)
							 .collect(Collectors.toList());
	}
	
	@GetMapping("/uncompleted")
	public List<Task> getAllUnCompletedTask() {
		return taskRepository.findAll()
							 .stream()
							 .filter(task -> task.isCompleted() == false)
							 .collect(Collectors.toList());
	}
	
	@PostMapping()
	public Task addTask(@RequestBody Task newTask) {
		taskRepository.save(newTask);
		return newTask;
	}
	
	@PutMapping("/{id}")
	public Task updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
		Task task = taskRepository.findById(id).get();
		task.setTitle(updatedTask.getTitle());
		task.setCompleted(updatedTask.isCompleted());
		taskRepository.save(task);
		return task;
	}
	
	@DeleteMapping("/{id}")
	public void deleteTask(@PathVariable Long id) {
		taskRepository.deleteById(id);
	}

}
