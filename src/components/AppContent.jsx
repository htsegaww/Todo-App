import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styles from "../styles/modules/app.module.scss";

import { AnimatePresence, motion } from "framer-motion";
import { clearAll } from "../slices/todoSlice";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((todo) => {
    if (filterStatus === "all") {
      return true;
    }
    return todo.status === filterStatus;
  });

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} />;
          })
        ) : (
          <motion.p className={styles.emptyText} variants={child}>
            No todo found
          </motion.p>
        )}
      </AnimatePresence>
      <div
        className={styles.btn}
        onClick={() => dispatch(clearAll())}
        role="button"
        tabIndex={0}
      >
        clear all
      </div>
    </motion.div>
  );
};

export default AppContent;
