# DNS-SERVER

---

# 🛠️ Personal DNS Server Project

---

## 📖 What is this?

This is a **Personal DNS Server backend** built with **Node.js**, **Express**, and **MySQL** to help you **learn DNS concepts** and sharpen your backend skills.
It manages DNS records (A, CNAME, MX) via an API and runs a simple DNS server using the `dns2` library.

---

## 🎯 Why did I create this?

* To **understand how DNS works** behind the scenes.
* To build a **custom DNS management API** with a database.
* To experiment with **building a lightweight DNS server** in pure JavaScript.
* To gain hands-on experience with backend technologies: Node.js, MySQL, and UDP networking.

---

## 🚀 What can it be used for?

* Manage your own DNS records locally or in small networks.
* Learn DNS querying and response handling in detail.
* Use as a base for a more advanced custom DNS solution.
* Explore integrating with real-world DNS servers later.

---

## 🛠️ Full Project Setup

### 1. Clone or download the repo

```bash
git clone https://github.com/yourusername/dns-server-backend.git
cd dns-server-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup MySQL Database

* Create a database, e.g., `dns`
* Create a table for DNS records:

```sql
CREATE TABLE dns_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  domain VARCHAR(255) NOT NULL,
  type ENUM('A', 'CNAME', 'MX') NOT NULL,
  value VARCHAR(255) NOT NULL,
  ttl INT DEFAULT 3600
);
```

* Update your MySQL connection credentials in `db.js`

---

### 4. Run the DNS API Server

```bash
npm run api
```

* Starts Express API at [http://localhost:3000](http://localhost:3000)

---

### 5. Run the DNS Server (UDP DNS responder)

```bash
npm run dns
```

* Starts DNS server listening on UDP port `5333`

---

### 6. Test adding a DNS record via cURL

```bash
curl -X POST http://localhost:3000/dns -H "Content-Type: application/json" -d "{\"domain\":\"example.local\",\"type\":\"A\",\"value\":\"192.168.1.10\"}"
```

* Should respond with: `{"message":"Record added"}`

---

### 7. Query DNS record (using dig or custom client)

```bash
dig @127.0.0.1 -p 5333 example.local
```

* Returns DNS A record `192.168.1.10` if present

---

## 📦 Libraries Used

| Library   | Purpose                                        |
| --------- | ---------------------------------------------- |
| `express` | Web framework for building the REST API        |
| `mysql2`  | MySQL client for Node.js                       |
| `dns2`    | Lightweight DNS server and packet handling     |
| `cors`    | Enable Cross-Origin Resource Sharing           |
| `dotenv`  | Load environment variables from `.env` file    |
| `nodemon` | Dev tool to auto-restart server on code change |

---

## ⚙️ Commands Summary

| Command            | What it does                      |
| ------------------ | --------------------------------- |
| `npm install`      | Installs all project dependencies |
| `npm run api`      | Starts the REST API server        |
| `npm run dns`      | Starts the UDP DNS server         |
| `curl -X POST ...` | Adds DNS records to the database  |

---

## 🧩 Is this project low-level?

No, this project uses high-level Node.js libraries to simplify working with DNS protocols and networking. It abstracts many details like packet encoding/decoding and socket management, providing a practical and manageable learning experience.

---

# Happy Coding! 🚀

---

If you want, I can format this as a `.md` file ready to drop into your repo! Would you like me to do that?
