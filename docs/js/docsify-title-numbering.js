// =====================================
// Docsify 自动标题编号 + 二级标题样式兼容 + 末尾点号
// =====================================
(function() {
    const counters = [0, 0, 0, 0, 0, 0];

    function getNumber(level) {
        counters[level - 1]++;
        for (let i = level; i < counters.length; i++) counters[i] = 0;
        // 修改：在编号末尾加一个点号
        return counters.slice(0, level).filter(n => n > 0).join('.') + '.';
    }

    window.$docsify = window.$docsify || {};
    const userRenderer = (window.$docsify.markdown && window.$docsify.markdown.renderer) || {};

    const autoNumberPlugin = function(hook, vm) {
        hook.doneEach(function() {
            counters.fill(0);
        });
    };

    window.$docsify.markdown = {
        renderer: Object.assign({}, userRenderer, {
            heading: function (text, level, raw, slugger) {
                const number = getNumber(level);
                const id = slugger.slug(raw);

                // 特别处理二级标题（带红色块样式）
                if (level === 2) {
                    return `
            <h2 class="custom-title" id="${id}">
              <span class="label">${number} ${text}</span>
            </h2>
          `;
                }

                // 其他级别标题（普通编号）
                return `
          <h${level} id="${id}">
            <span class="header-number">${number}</span>
            <span class="header-text">${text}</span>
          </h${level}>
        `;
            }
        })
    };

    window.$docsify.plugins = (window.$docsify.plugins || []).concat(autoNumberPlugin);
})();