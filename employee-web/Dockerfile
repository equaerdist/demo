# Используем официальный образ Node.js для сборки
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы проекта в контейнер
COPY . .


# Открываем порт для Vite
EXPOSE 5173

# Запускаем приложение с указанием host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
