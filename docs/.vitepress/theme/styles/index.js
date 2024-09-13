// .vitepress/theme/index.js
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhanceApp({ app, router, siteData }) {
        // 为任务列表添加点击事件
        const updateCheckboxState = () => {
            document.querySelectorAll('.task-list-item input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    // 这里可以添加你的逻辑，例如保存状态到本地存储
                });
            });
        };

        router.afterEach(() => {
            updateCheckboxState();
        });
    }
});
