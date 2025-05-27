


## Development run


Generate ssl certs for marzban (Check marzban/env-marzban for path)

```
mkcert -cert-file fullchain.pem -key-file key.pem localhost 127.0.0.1 ::1
mkcert -install

```


Run docker compose

``` 
docker-compose up 

```

Prepare local .env file 

```
cp ../.env.example ../.env 
```

Run ngrok for access to marzban api (should get account ngrok.com first)

```
ngrok http https://localhost:5001

Forwarding                    https://48ed-2a01-e5c0-136c-00-2.ngrok-free.app -> https://localhost:5001 
```

Install npm deps

```
pnpm install
```


Push migrations 

```
npx prisma db push
```

Grab JWT token from Marzban mysql db 

```
mysql> select * from jwt;
+----+------------------------------------------------------------------+
| id | secret_key                                                       |
+----+------------------------------------------------------------------+
|  1 | f944cf6e8077d4d734a2d0ea229be5077178ddfeddb217822a3654b22868d662 |
+----+------------------------------------------------------------------+
1 row in set (0.06 sec)


```

Add local node to pg db  (change jwt token to yours from prev comman)


```

mydatabase=# INSERT INTO clusters (id, paid, "all", jwt, updated) VALUES
  ('48ed-2a01-e5c0-136c-00-2', 0, 0, 'f944cf6e8077d4d734a2d0ea229be5077178ddfeddb217822a3654b22868d662', CURRENT_TIMESTAMP);

```



