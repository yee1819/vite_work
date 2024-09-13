export function setup() {
  // 等待页面加载完成
  document.addEventListener('DOMContentLoaded', () => {
    // 获取所有 class 为 task-list-item-checkbox 的 input 元素
    const checkboxes = document.querySelectorAll('input.task-list-item-checkbox[disabled]');

    // 遍历这些元素并移除 disabled 属性
    checkboxes.forEach(checkbox => {
      checkbox.removeAttribute('disabled');
    });
  });
}