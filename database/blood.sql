--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

-- Started on 2020-09-07 00:22:52

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2889 (class 0 OID 17161)
-- Dependencies: 207
-- Data for Name: blood; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (1, 'Sang-pure', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (2, 'Sang-mêlé', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (3, 'Né moldu', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (4, 'Moldu', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (5, 'Elf', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (6, 'Gobelin', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (7, 'Animaux', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (8, 'Hybride', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (9, 'Géant', '2020-08-26 23:08:18.041532', NULL);
INSERT INTO public.blood (id, name, created_at, updated_at) VALUES (10, 'Cracmol', '2020-08-26 23:08:18.041532', NULL);


--
-- TOC entry 2895 (class 0 OID 0)
-- Dependencies: 206
-- Name: blood_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blood_id_seq', 1, false);


-- Completed on 2020-09-07 00:22:52

--
-- PostgreSQL database dump complete
--

