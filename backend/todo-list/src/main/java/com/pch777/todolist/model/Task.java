package com.pch777.todolist.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String title;
	
	private LocalDate createOn = LocalDate.now();
	
	private boolean completed;

	public Task() {
	}

	public Task(String title, LocalDate createOn, boolean completed) {
		this.title = title;
		this.createOn = createOn;
		this.completed = completed;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDate getCreateOn() {
		return createOn;
	}

	public void setCreateOn(LocalDate createOn) {
		this.createOn = createOn;
	}
	
	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

}
