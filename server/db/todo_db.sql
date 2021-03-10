--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2021-03-10 18:57:26

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
-- TOC entry 203 (class 1259 OID 41892)
-- Name: todo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.todo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1;


ALTER TABLE public.todo_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 41887)
-- Name: todo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.todo (
    id integer DEFAULT nextval('public.todo_seq'::regclass) NOT NULL,
    task character varying(250) NOT NULL,
    status boolean NOT NULL,
    "createdAt" date NOT NULL,
    "updateAt" date
);


ALTER TABLE public.todo OWNER TO postgres;

--
-- TOC entry 2816 (class 0 OID 41887)
-- Dependencies: 202
-- Data for Name: todo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.todo (id, task, status, "createdAt", "updateAt") FROM stdin;
\.


--
-- TOC entry 2823 (class 0 OID 0)
-- Dependencies: 203
-- Name: todo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.todo_seq', 1, false);


--
-- TOC entry 2689 (class 2606 OID 41891)
-- Name: todo todo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);


-- Completed on 2021-03-10 18:57:27

--
-- PostgreSQL database dump complete
--

