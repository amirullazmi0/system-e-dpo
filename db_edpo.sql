-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Sep 2023 pada 11.27
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_edpo`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `e-dpo`
--

CREATE TABLE `e-dpo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tempatLahir` varchar(255) NOT NULL,
  `tanggalLahir` date NOT NULL,
  `umur` varchar(255) NOT NULL,
  `jk` varchar(255) NOT NULL,
  `pendidikan` varchar(255) DEFAULT NULL,
  `alamat` longtext DEFAULT NULL,
  `profesi` varchar(255) DEFAULT NULL,
  `kasusPosisi` longtext NOT NULL,
  `pidum` varchar(255) DEFAULT NULL,
  `pidsus` varchar(255) DEFAULT NULL,
  `hukuman` longtext NOT NULL,
  `agama` varchar(255) NOT NULL,
  `wilayah` int(255) DEFAULT NULL,
  `tertangkap` tinyint(1) NOT NULL,
  `dasarPenetapan` longtext DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `e-dpo`
--

INSERT INTO `e-dpo` (`id`, `nama`, `tempatLahir`, `tanggalLahir`, `umur`, `jk`, `pendidikan`, `alamat`, `profesi`, `kasusPosisi`, `pidum`, `pidsus`, `hukuman`, `agama`, `wilayah`, `tertangkap`, `dasarPenetapan`, `foto`, `created_at`, `updated_at`) VALUES
(1, 'Dr. WIHELMUS SUWITO, SH, MH. / W. SUWITO, SH, MH.', 'Sei Raya', '1971-02-10', '51', 'L', 'S-3', 'Jl. Purnama Komp. Pinangsia No.1 Pontianak Selatan.', 'Advokat/ Dirut PT. Borneo Tribune Press', 'Terbukti bersalah melakukan tindak pidana Korupsi secara bersama-sama sebagaimana Ketentuan Pasal 2 Ayat (1) Jo Pasal 18 UU No. 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi sebagaimana telah diubah dengan UU No.20 Tahun 2001 Jo Pasal 55 Ayat (1) ke-1 KUHP Jo Pasal 64 Ayat (1) KUHP.', NULL, 'Tindak Pidana Korupsi', 'Pidana Penjara selama 6 (enam) tahun, Denda Rp.200.000.000,- Subsidair 6 (enam) bulan Penjara dan Uang Pengganti Kerugian Negara sebesar Rp.1.609.745.933,70', 'Kristen Katholik', 1, 0, '-	Putusan MA RI Nomor :1591 K/PID.SUS/2015 Tanggal 16 Agustus 2016\r\n-	Sprint Pelaksanaan Putusan MA RI Nomor : PRINT-1514/Q.1.10/Fu.1/10/2016 Tanggal 10 Oktober 2016', 'img-dpo-1693296690.jpg', '2023-08-29 01:11:30', '2023-08-29 05:31:32'),
(4, 'H. ABDULAH', 'Nanga Pak', '1969-02-04', '53', 'L', '-', NULL, 'SWASTA', 'Terbukti melakukan Tindak Pidana Korupsi sebagaimana Ketentuan Pasal 2 Ayat (1) Jo Pasal 18 UU No. 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi sebagaimana telah diubah dengan UU No.20 Tahun 2001 Jo Pasal 55 Ayat (1) ke-1 KUHP Jo Pasal 64 Ayat (1) KUHP.', NULL, 'Tindak Pidana Korupsi', 'Pidana Penjara selama 5 (lima) tahun, Denda Rp.200.000.000,- Subsidair 6 (enam) bulan Penjara dan Uang Pengganti Kerugian Negara sebesar Rp.1.920.395.184,35', 'Islam', 9, 0, '-	Putusan MA RI Nomor : 1954 K/PID.SUS/2015 Tanggal 08 Oktober 2015\r\n-	Sprint Pelaksanaan Putusan Pengadilan Nomor : PRINT-01/Q.1.12/Fu.1/01/2018 Tanggal 04 Januari 2018', 'img-dpo-1693309429.jpg', '2023-08-29 04:43:49', '2023-08-29 04:43:49'),
(5, 'CHAN INDRA ALIAS A KOO', 'Sekadau', '1951-05-01', '70', 'L', 'SD (tidak tamat)', 'Jalan Mawar No.42 RT 04/RW 11 Desa Sungai Ringin Kecamatan Sekadau Hilir Kab. Sekadau Kalimantan Barat,\r\nJalan Duri Kosambi Raya no 88 RT 06 RW 01 Kelurahan Kosambi Kec. Cengkareng Jakarta Barat, 8', 'Wiraswasta (Direktur PT. Sinar Bintang Sakti (SBS)),', 'Terbukti secara sah dan meyakinkan bersalah melakukan Tindak Pidana Korupsi sebagaimana Ketentuan Pasal 2 Ayat (1) UU No. 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi sebagaimana telah diubah dengan UU No.20 Tahun 2001', NULL, 'Tindak Pidana Korupsi', 'Pidana Penjara selama 10 (sepuluh) tahun, Denda Rp.500.000.000,- subsidair 9 (Sembilan) bulan penjara dan Uang Pengganti Kerugian Negara sebesar Rp.18.429.512.446,-', 'Budha', 8, 0, '-	Putusan PN Pontianak Nomor:17/Pid.Sus/TPK/2019/PN.Ptk Tanggal 16 Januari 2020\r\n-	Surat Nomor R-01/O.1.20/Fu.1/02/2020 perihal Bantuan Pencarian/Penangkapan Terpidana yang diputus dalam sidang secara In Absenstia an. CHAN INDRA Als A KOO (T-14)', 'img-dpo-1693309594.jpg', '2023-08-29 04:46:34', '2023-08-29 04:46:34'),
(6, 'ROBERT SIAGIAN, SH', 'Bali', '1969-11-10', '52', 'L', 'S-1', 'Jl. M. Sohor   No. 07 Pontianak', 'Kepala Cabang PT. Sutan Agung Murni Pontianak', 'Terbukti melakukan Tindak Pidana Korupsi sebagaimana Ketentuan Pasal 2 Ayat (1) Jo Pasal 18 Ayat (1) UU Nomor 31 Tahun 1999 Jo UU Nomor 20 Tahun 2001 Jo Pasal 55 Ayat (1) ke-1 KUHP Jo Pasal 64 Ayat (1) KUHP', NULL, 'Tindak Pidana Korupsi', 'Pidana Penjara selama 10 (sepuluh) tahun, Denda Rp.200.000.000,- subsidair 6 (enamn) bulan penjara', 'Kristen Protestan', 1, 0, '-	Putusan PN Pontianak Nomor:329/Pid.B/PN.PTK Tanggal 21 Januari 2003\r\n-	Sprint Pelaksanaan Putusan Pengadilan Nomor : PRINT-271/Q.1.10/Fu.1/02/2014 Tanggal 28 Februari 2014', 'img-dpo-1693309759.jpg', '2023-08-29 04:49:19', '2023-08-29 05:31:30'),
(7, 'DENNY SUNARYA DERMAWAN als.ONG DJIN SUN als. ASUN', 'Sanggau', '1964-10-23', '57', 'L', 'SLTA', 'Jl. Hijas No. 193/112 Pontianak', 'Swasta, ex. Direktur PT.Buana Tunggal Kita Persada (PT.BTKP) /Perusahaan Furniture / Mebel Kayu, di Jl. Adi Sucipto Km. 10,3 Sei Raya Kota Pontianak', 'Terbukti melakukan Tindak Pidana Korupsi sebagaimana Ketentuan Pasal 1 Ayat (1) sub a UU No. 3 Tahun 1971 Jo Pasal 43 A ayat (1) UU No. 20 Tahun 2001 Jo Pasal 55 Ayat (1) ke-1 KUHP Jo Pasal 64 KUHP', NULL, 'Tindak Pidana Korupsi', 'Pidana Penjara selama 8 (delapan) tahun, Denda Rp.500.000.000,- subsidair 9 (Sembilan) bulan penjara dan Uang Pengganti Kerugian Negara sebesar Rp.18.429.512.446,-', 'Budha', NULL, 0, '-	Putusan PN Pontianak Nomor:274/Pid.B/PN.Ptk Tanggal 28 Oktober 2002\r\n-	Sprint Pelaksanaan Putusan Pengadilan Nomor : PRINT-270/Q.1.10/Fu.1/02/2014 Tanggal 28 Februari 2014', 'img-dpo-1693310283.jpg', '2023-08-29 04:58:03', '2023-08-29 04:58:03'),
(8, 'AITULLAH Alias AI Bin MUNIR', 'Kampung Sanggau (Kubu Raya)', '1995-03-10', '26', 'L', 'SMA', 'Jalan Panglima Aim Gang Mandala Kelurahan Tanjung Hulu Kecamatan Pontianak Timur Kota Pontianak', NULL, 'Terbukti secara sah dan meyakinkan bersalah melakukan tindak pidana tanpa hak atau melawan hukum menjadi perantara dalan jual beli Narkotika Golongan I bukan tanaman yang melebihi 5 (lima) gram Sebagaimana Ketentuan Pasal 114 Ayat (2) UU RI no. 35 Tahun 2009 Tentang Narkotika', 'Tindak Pidana Narkotika', NULL, 'Pidana Penjara selama 8 (delapan) tahun, Denda Rp.2.000.000.000,- Subsidair 6 (enam) bulan Penjara', 'Islam', 2, 0, '-	Putusan PN Singkawang Nomor : 152/Pid.Sus/2015 PN.SKW Tanggal 24 November 2015', 'img-dpo-1693310406.jpg', '2023-08-29 05:00:06', '2023-08-29 05:00:06'),
(9, 'PAULUS ALEXANDER Alias ALEX Anak Dari SALFINUS BUDIN (Alm)', 'Suka Maju', '1969-11-12', '52', 'L', NULL, 'S-1 (Tamat)', 'Wiraswasta', 'Melakukan tindak pidana dengan sengaja dan tanpa hak mendistribusikan dan atau membuat dapat diaksesnya Informasi Elektronik yang memiliki muatan penghinaan atau pencemaran nama baik sebagaimana ketentuan Pasal 45 Ayat (3) Jo Pasal 27 Ayat (3) UU RI Nomor 19 Tahun 2016 tentang perubahan atas UU RI Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik', 'Tindak Pidana ITE', NULL, 'Pidana Penjara selama 5 (lima) bulan', 'Kristen Katholik', 10, 0, '-	Surat Kepala Kejaksaan Negeri Kapuas Hulu kepada Kepala Kejaksaan Tinggi Kalimantan Barat Nomor : R-55/O.1.16/Dti.2/09/2022 Tanggal 14 September 2022 perihal Permohonan Bantuan Pencarian / Penangkapan;\r\n-	Putusan Pengadilan Negeri Putussibau Nomor : 8/Pid.Sus/2022/PN Pts Tanggal 26 April 2022 an.  Paulus Alexander Alias Alex Anak Dari Salfinus Budin.', 'img-dpo-1693310549.jpg', '2023-08-29 05:02:29', '2023-08-29 05:02:29'),
(10, 'REZZA FAHLEVI Alias RESA Bin RAMLI H. ILYAS', 'Pontianak', '1989-07-23', '33', 'L', 'SMA (Tamat)', 'Desa Batu Ampar Kecamatan Batu Ampar Kabupaten Kubu Raya atau Dusun Riung Desa Nanga Tepuai Kecamatan Hulu Gurung Kabupaten Kapuas Hulu', 'Wiraswasta', 'Melakukan tindak pidana Penyalahguna Narkotika Golongan I bagi dirinya sendiri sebagaimana ketentuan Pasal 127 Ayat (1) huruf a UU RI Nomor 35 Tahun 2009 tentang Narkotika', 'Tindak Pidana Narkotika', NULL, 'Pidana Penjara selama 3 (tiga) tahun', 'Islam', 10, 0, '-	Surat Kepala Kejaksaan Negeri Kapuas Hulu kepada Kepala Kejaksaan Tinggi Kalimantan Barat Nomor : R-55/O.1.16/Dti.2/09/2022 Tanggal 14 September 2022 perihal Permohonan Bantuan Pencarian / Penangkapan;\r\n-	Putusan Mahkamah Agung RI Nomor : 1765K/Pid.Sus/2022 Tanggal 17 Juni 2022 Atas Nama Rezza Fahlevi Alias Resa Bin Ramli H. Ilyas', 'img-dpo-1693310873.jpg', '2023-08-29 05:07:53', '2023-08-29 05:07:53'),
(11, 'JHON FERY SAMOSIR ALIAS FEY ANAK DARI TAKAS SAMOSIR', 'Meda', '1993-12-09', '28', 'L', 'SMA (Tamat)', 'Jl. Gau II-A No.52 LK II Medan Kelurahan Harjosari I Kecamatan Medan Amplas Kota Medan Provinsi Sumatra Utara', 'Karyawan Swasta', 'Melakukan tindak pidana Penyalahguna Narkotika Golongan I bagi dirinya sendiri sebagaimana ketentuan Pasal 127 Ayat (1) huruf a UU RI Nomor 35 Tahun 2009 tentang Narkotika', 'Tindak Pidana Narkotika', NULL, 'Pidana Penjara selama 1 (satu) tahun 6 (enam) bulan', 'Kristen Katholik', 10, 0, '-	Surat Kepala Kejaksaan Negeri Kapuas Hulu kepada Kepala Kejaksaan Tinggi Kalimantan Barat Nomor : R-55/O.1.16/Dti.2/09/2022 Tanggal 14 September 2022 perihal Permohonan Bantuan Pencarian / Penangkapan;\r\n-	Putusan Mahkamah Agung RI Nomor : 171K/Pid.Sus/2022 Tanggal 23 Februari 2022 An. Jhon Fery Samosir Alias Fey Anak Dari Takas Samosir', 'img-dpo-1693310976.jpg', '2023-08-29 05:09:36', '2023-08-29 05:09:36'),
(12, 'MUHAMMAD AWANG Alias AWANG Bin M. YASIN (Alm', 'Putussibau', '1976-09-03', '46', 'L', 'SMA (Tamat)', 'Jl. Kom Yos Sudarso Gang Alpokat Indah 3 Kelurahan Sungai Belitung Kecamatan Pontianak Barat Kota Pontianak atau Jl. Lintas Selatan Desa Kedamin Darat Kecamatan Putussibau Selatan Kabupaten Kapuas Hulu', 'Swasta', 'Melakukan tindak pidana Tanpa Hak atau melawan hukum menjual Narkotika Golongan I Bukan Tanaman sebagaimana ketentuan Pasal 114 Ayat (1) UU RI Nomor 35 Tahun 2009 tentang Narkotika', 'Tindak Pidana Narkotika', NULL, 'Pidana Penjara selama 5 (lima) tahun 6 (enam) bulan dan denda sebesar Rp.1.000.000.000,- (satu milyar rupiah) subsider pidana penjara selama 6 (enam) bulan', 'Islam', 10, 0, '-	Surat Kepala Kejaksaan Negeri Kapuas Hulu kepada Kepala Kejaksaan Tinggi Kalimantan Barat Nomor : R-55/O.1.16/Dti.2/09/2022 Tanggal 14 September 2022 perihal Permohonan Bantuan Pencarian / Penangkapan;\r\n-	Putusan Mahkamah Agung RI Nomor : 1708K/Pid.Sus/2022 Tanggal 26 April 2022 an. Muhammad Awang Alias Awang Bin M. Yasin (Alm).', 'img-dpo-1693311103.jpg', '2023-08-29 05:11:43', '2023-08-29 05:11:43'),
(13, 'FAHRIZAL SUYONI Alias RIZAL Bin M. SUYOTO', 'Putussibau', '1994-02-04', '28', 'L', 'SD (Tidak Tamat)', 'Jl. A Dogom Hilir Kantor RT.001 RW.004 Kelurahan Hilir Kantor Kecamatan Putussibau Utara Kabupaten Kapuas Hulu', 'Buruh Harian Lepas', 'Melakukan tindak pidana Penyalah Guna Narkotika GolonganI bagi diri sendiri  sebagaimana ketentuan Pasal 127 Ayat (1) huruf a UU RI Nomor 35 Tahun 2009 tentang Narkotika', 'Tindak Pidana Narkotika', NULL, 'Pidana Penjara selama 2 (dua) tahun 4 (empat) bulan', 'Islam', 10, 0, '-	Surat Kepala Kejaksaan Negeri Kapuas Hulu kepada Kepala Kejaksaan Tinggi Kalimantan Barat Nomor : R-55/O.1.16/Dti.2/09/2022 Tanggal 14 September 2022 perihal Permohonan Bantuan Pencarian / Penangkapan;\r\n-	Putusan Mahkamah Agung RI Nomor : 1581K/Pid.Sus/2022 Tanggal 24 Mei 2022 an. Fahrizal Suyoni Alias Rizal Bin M. Suyoto.', 'img-dpo-1693311209.jpg', '2023-08-29 05:13:29', '2023-08-29 05:13:29'),
(14, 'AHMAD KHALIL Alias KHALIL Bin SELADIN', 'Tebang Kacang', '1994-10-21', '28', 'L', 'SMA Sederajat', 'Dusun Tebang Kacang Sari Rt.005 Rw.004 Desa Tebang Kacang Kec. Sungai Raya Kab. Kubu Raya', 'Karyawan Swasta', 'Melakukan TIndka Pidana Korupsi sebagaimana kentuan Pasal 5 Ayat (1) huruf a  UU No. 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi sebagaimana telah diubah dengan UU No.20 Tahun 2001', 'Tindak Pidana Korupsi', NULL, 'Pidana Penjara selama 4 (empat) tahun dan denda sejumlah Rp.100.000.000,- (seratus juta rupiah) subsidair 3 (tiga) bulan penjara', 'Islam', 3, 0, '-	Surat Kepala Kejaksaan Negeri Mempawah Nomor : B-06/O.1.15/Dip.4/11/2022 Tanggal 02 November 2022 perihal Permohomanan bantuan Pencarian dan Pengamanan Terpidana Korupsi atas nama HMAD KHALIL Alias KHALIL Bin SELADIN\r\n-	Putusan Pengadilan Tinggi Pontianak Nomor : 4/Pid.Sus-TPK/2021/PT PTK Tanggal 29 Juli 2021 Atas nama HMAD KHALIL Alias KHALIL Bin SELADIN', 'img-dpo-1693311300.jpg', '2023-08-29 05:15:00', '2023-08-29 05:15:00'),
(15, 'Sukemi Haji', 'Demak', '1958-04-08', '64', 'L', 'SMA', 'Jalan Lengkong Rt. 007/RW. 004 Kel. Donorejo Kecamatan Karang Tengah Kabupaten Demak Provinsi Jawa Tengah', 'Konstruksi', 'Tindak Pidana Korupsi Pembangunan\r\nRumah Toko (Ruko) di Lokasi Sungai Ambawang Tahun 2015 sampai\r\nTahun 2018 oleh Perusahaan Umum (Perum) Pembangunan\r\nPerumahan Nasional (Perumnas) Cabang Pontianak, dengan\r\nsangkaan melanggar Pasal 2 Ayat (1) atau Pasal 3 Jo Pasal 18\r\nUndang-Undang Republik Indonesia Nomor 31 Tahun 1999 tentang\r\nPemberantasan Tindak Pidana Korupsi sebagaimana telah diubah\r\ndan ditambah dengan Undang-Undang Republik Indonesia Nomor 20\r\nTahun 2001 tentang Perubahan Atas Undang Undang Republik\r\nIndonesia Nomor 31 Tahun 1999 Tentang Pemberantasan Tindak\r\nPidana Korupsi', 'Tindak Pidana Korupsi', NULL, '-', 'Islam', 14, 0, '-	Surat Perintah Penyidikan Kepala Kejaksaan Tinggi Kalimantan Barat Nomor: Print-20/O.1/Fd.1/10/2022 Tanggal 10 Oktober 2022\r\n-	tditetapkan sebagai Tersangka oleh Kejaksaan Tinggi Kalimantan Barat berdasarkan Surat Nomor : R-10/O.1/Fd.1/10/2022 Tanggal 10 Oktober 2022\r\n-	Penetapan Daftar Pencarian Orang (DPO) oleh Kejaksaan Tinggi Kalimantan Barat berdasarkan surat Nomor: Print-01/O.1/Fd.1/03/2023 Tanggal 10 Maret 2023', 'img-dpo-1693311401.png', '2023-08-29 05:16:41', '2023-08-29 20:23:53'),
(16, 'DEVI ABRIANTY Alias DEVY Bin KHAIRUL MUSLIM (Alm)', 'Pontianak', '1995-10-05', '27', 'P', 'SMP (tidak tamat)', 'Jl. Tritura gg. Harmonis No.13 RT.001 RW.004 Kelurahan Tanjung Hilir Kecamatan Pontianak Timur Kota Pontianak', 'Swasta', 'Terbukti Tanpa Hak atau melawan hukum memiliki Narkotika Golongan I bukan tanaman Sebagaimana Ketentuan Pasal 112 Ayat (1) UU RI Nomor 35 Tahun 2009 Tentang Narkotika', 'Tindak Pidana Narkotika', NULL, 'Pidana Penjara selama 1 (satu) tahun 6 (enam) bulan dan Denda Rp.8.00.000.000,- (delapan ratus juta rupiah) Subsidair 2 (dua) bulan Penjara', 'Islam', 10, 1, '-	Surat Kepala Kejaksaan Negeri Kapuas Hulu kepada Kepala Kejaksaan Tinggi Kalimantan Barat Nomor : R-55/O.1.16/Dti.2/09/2022 Tanggal 14 September 2022 perihal Permohonan Bantuan Pencarian / Penangkapan;\r\n-	Putusan Mahkamah Agung RI Nomor: 4083 K/Pid.Sus/2021 Tanggal 08 Desember 2021 An. Devy Abrianty Alias Devy Bin Khairul Muslim (Alm)', 'img-dpo-1693364801.png', '2023-08-29 20:06:41', '2023-08-29 20:06:48'),
(17, 'ZONY BAN TUKUNANG', 'Paniki Siau', '1974-11-17', '47', 'L', '-', 'Matiri Garden I Blok D No. 3A RT.002 RW.021 Kel. Balian Kec. Batam Kota, Kepulauan Riau.', 'Nahkoda Kapal MT Western KGT/Pelaut', 'Terbukti secara sah dan meyakinkan bersalah melakukan tindak pidana Kepabeanan sebagaimana ketentuan Pasal 102 huruf e UU No.10 Tahun 1995 sebagaimana telah diubah dengan UU No.17 Tahun 2006 tentang Kepabeanan.', NULL, 'Tindak Pidana Kepabeanan', 'Pidana Penjara selama 3 (tiga) tahun, Denda sebesar Rp.100.000.000,- Subsidair 6 (enam) bulan', 'Kristen Protestan', 1, 1, '-	Putusan MA RI Nomor : 894 K/Pid.Sus/2012 Tanggal 20 November 2012\r\n-	Sprint Pelaksanaan Putusan Pengadilan Nomor : PRINT-277/Q.1.10/Fu.2/04/2013 Tanggal 25 April 2013', 'img-dpo-1693365020.png', '2023-08-29 20:10:20', '2023-08-29 20:10:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_08_04_210003_create_e_dpo_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `level` int(255) NOT NULL,
  `area` int(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `level`, `area`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Danke Rajagukguk', 'danke@gmail.com', 1, 14, NULL, '$2y$10$SLDLP3AS3nDgSOQhVsIKGOsAOP9o5SAk2iimg0Yd06YBe/7yd3HQ2', NULL, '2023-08-29 01:06:08', '2023-08-29 01:06:08'),
(3, 'KN Pontianak', 'pontianak@gmail.com', 2, 1, NULL, '$2y$10$G7MrbRx.mdSrQhLzNzH1wORyeGzdABawfdshMRRGI6uoPpXK54Q9q', NULL, '2023-08-29 04:01:27', '2023-08-29 19:29:33'),
(4, 'KN Sintang', 'sintang1@gmail.com', 2, 9, NULL, '$2y$10$zNcgoGln.iMja7b9z8Cd5uHIPXtZOVCQaReogFGu6BINeiD040MsK', NULL, '2023-08-29 19:25:03', '2023-08-29 19:27:43');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `e-dpo`
--
ALTER TABLE `e-dpo`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `e-dpo`
--
ALTER TABLE `e-dpo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
