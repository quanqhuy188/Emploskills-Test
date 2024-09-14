Emploskills
===========

**Emploskills** là một dự án sử dụng Next.js cho giao diện người dùng, .NET Core cho API và Docker để quản lý các dịch vụ. Dưới đây là hướng dẫn chi tiết để thiết lập và chạy dự án.

Yêu Cầu
-------

Trước khi bắt đầu, hãy đảm bảo rằng bạn đã cài đặt các phần mềm và công cụ sau:

-   **Node.js**: Để chạy các ứng dụng Next.js.
-   **Docker**: Để xây dựng và chạy các container Docker.
-   **.NET Core SDK**: Nếu bạn cần xây dựng hoặc phát triển API .NET Core (không cần thiết chỉ để chạy).

Cài Đặt
-------

### 1\. Clone Repository

Sao chép mã nguồn về máy của bạn:

bash

Sao chép mã

`git clone https://github.com/username/emploskills.git
cd emplotskills`

### 2\. Cài Đặt Frontend

Truy cập vào thư mục `FE` và cài đặt các phụ thuộc:

bash

Sao chép mã

`cd FE
npm install`

### 3\. Chạy Dự Án

Quay lại thư mục gốc của dự án và chạy Docker Compose để xây dựng và khởi động các dịch vụ:

bash

Sao chép mã

`cd ..
docker-compose up --build`

Lệnh trên sẽ xây dựng lại các container Docker và khởi động chúng. Sau khi quá trình hoàn tất, các dịch vụ sẽ chạy và bạn có thể truy cập ứng dụng của mình qua địa chỉ:

-   **Frontend**: <http://localhost:3001>
-   **API**: <http://localhost:5001/swagger/index.html> (hoặc port mà bạn đã cấu hình trong Docker Compose)

Gỡ Rối
------

Nếu gặp phải vấn đề, hãy kiểm tra các điểm sau:

-   **Docker không chạy**: Đảm bảo rằng Docker đang hoạt động trên hệ thống của bạn.
-   **Lỗi cài đặt Node.js**: Kiểm tra các thông báo lỗi khi chạy `npm install` và đảm bảo rằng bạn đang sử dụng phiên bản Node.js tương thích.
-   **Lỗi Docker Compose**: Kiểm tra các file cấu hình Docker Compose (`docker-compose.yml`) và đảm bảo rằng tất cả các dịch vụ được cấu hình chính xác.

Tài Liệu Tham Khảo
------------------

-   Next.js Documentation
-   Docker Documentation
-   [.NET Core Documentation](https://docs.microsoft.com/en-us/dotnet/core/)

Giấy Phép
---------

Dự án này được cấp phép theo MIT License.
