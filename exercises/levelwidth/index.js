// --- Задача
// Принимает root ноду дерева,
// возвращает массив, в котором каждый элемент
// это ширина дерева на каждом уровне.
// Дано:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Ответ: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const buffer = [root, "stop"];

  while (buffer.length > 1) {
    const node = buffer.shift();
    if (node === "stop") {
      counters.unshift(0);
      buffer.push("stop");
    } else {
      counters[0]++;
      buffer.push(...node.children);
    }
  }
  return counters.reverse();
}

module.exports = levelWidth;
