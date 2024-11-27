import React, { useState, useEffect } from "react";
import { Button, Input, Checkbox, Modal, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function Ex12() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      if (
        tasks.some(
          (task) => task.text.toLowerCase() === newTask.trim().toLowerCase()
        )
      ) {
        message.error("Tên công việc đã tồn tại!");
        return;
      }
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTaskToDelete(id);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete));
      setIsModalVisible(false);
      setTaskToDelete(null);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (id) => {
    setEditingId(id);
    const task = tasks.find((t) => t.id === id);
    if (task) setNewTask(task.text);
  };

  const saveEdit = () => {
    if (editingId === null) return;
    if (
      tasks.some(
        (task) =>
          task.id !== editingId &&
          task.text.toLowerCase() === newTask.trim().toLowerCase()
      )
    ) {
      message.error("Tên công việc đã tồn tại!");
      return;
    }
    setTasks(
      tasks.map((task) =>
        task.id === editingId ? { ...task, text: newTask.trim() } : task
      )
    );
    setEditingId(null);
    setNewTask("");
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Danh sách công việc</h1>

      <div className="flex gap-2">
        <Input
          placeholder="Nhập tên công việc"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onPressEnter={() => (editingId ? saveEdit() : addTask())}
        />
        <Button onClick={editingId ? saveEdit : addTask} type="primary">
          {editingId ? "Lưu" : "Thêm"}
        </Button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-2 p-2 bg-white rounded-lg shadow"
          >
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
            <Button
              icon={<EditOutlined />}
              onClick={() => startEditing(task.id)}
              type="text"
              className="text-blue-500 hover:text-blue-600"
            />
            <Button
              icon={<DeleteOutlined />}
              onClick={() => deleteTask(task.id)}
              type="text"
              className="text-red-500 hover:text-red-600"
            />
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-600">
        Công việc đã hoàn thành: {completedCount}/{tasks.length}
      </div>

      <Modal
        title="Xác nhận xóa"
        open={isModalVisible}
        onOk={confirmDelete}
        onCancel={() => setIsModalVisible(false)}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa công việc này?</p>
      </Modal>
    </div>
  );
}
