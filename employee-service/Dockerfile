# билд стейдж
FROM golang:1.23.2 AS build

WORKDIR /src

# кэшируем зависимости внутри образа
COPY go.mod go.sum ./
RUN go mod download && go mod verify

# копируем исходный код и компилируем
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o ./app cmd/main.go

# ран стейдж
FROM alpine:latest

WORKDIR /app

# копируем только самое нужное из билда
COPY --from=build /src/app .
COPY --from=build /src/.env .
COPY --from=build /src/migrations migrations

RUN mkdir logs

CMD ["./app"]