# 📦 CoreInventory – Inventory Management System

CoreInventory is a **modular Inventory Management System (IMS)** designed to digitize and streamline stock operations within a business.  
It replaces manual registers, Excel sheets, and scattered tracking methods with a **centralized, real-time platform** for managing products, warehouses, and inventory movements efficiently.

---

## 🚀 Key Features

### 📦 Product Management
- Create and manage products
- Add SKU / product code
- Assign product categories
- Define units of measure
- Track stock availability per location

### 📥 Receipts (Incoming Stock)
- Record goods received from vendors
- Automatically increase inventory stock
- Track supplier deliveries

### 📤 Delivery Orders (Outgoing Stock)
- Manage outgoing shipments
- Reduce stock automatically after delivery
- Track customer shipments

### 🔄 Internal Transfers
- Move inventory between warehouses
- Transfer items between racks or locations
- Maintain a detailed movement history

### ⚖️ Inventory Adjustments
- Correct mismatches between recorded and physical stock
- Automatically update inventory records
- Log all adjustments in the inventory ledger

---

## 📊 Dashboard

The **Inventory Dashboard** provides a real-time overview of stock operations.

### Dashboard KPIs
- 📦 Total Products in Stock  
- ⚠️ Low Stock / Out of Stock Items  
- 📥 Pending Receipts  
- 📤 Pending Deliveries  
- 🔄 Internal Transfers Scheduled  

### 🔍 Dynamic Filters
- Filter by **Document Type**
- Filter by **Status**
- Filter by **Warehouse / Location**
- Filter by **Product Category**

---

## 🧩 System Modules

- 📦 Products  
- 📥 Receipts (Incoming Stock)  
- 📤 Delivery Orders (Outgoing Stock)  
- 🔄 Internal Transfers  
- ⚖️ Inventory Adjustments  
- 📊 Dashboard  
- 🏢 Warehouse Settings  
- 👤 User Profile Management  

---

## 🔐 Authentication

- User **Signup and Login**
- 🔑 **OTP-based password reset**
- Secure access to the **Inventory Dashboard**

---

## 🔄 Example Inventory Flow

1️⃣ Receive goods from vendor  
→ Receive **100 kg Steel**  
📈 Stock increases by **+100**

2️⃣ Internal Transfer  
→ Move **Main Store → Production Rack**

3️⃣ Delivery Order  
→ Deliver **20 units**  
📉 Stock decreases by **-20**

4️⃣ Stock Adjustment  
→ **3 kg steel damaged**  
📉 Stock decreases by **-3**

All operations are recorded in the **Stock Ledger** for full traceability.

---

## 🛠 Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Node.js / Express.js

**Database**
- MongoDB / MySQL / PostgreSQL

**Tools**
- Git
- GitHub
- REST APIs

---

## 📂 Project Structure
