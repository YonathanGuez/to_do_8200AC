

DROP TABLE IF EXISTs public.todo;
DROP SCHEMA IF EXISTs todo CASCADE;
DROP SEQUENCE IF EXISTS public.todo_seq;
-- PostgreSQL database dump
--
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
CREATE SEQUENCE public.todo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1;


ALTER TABLE public.todo_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;


CREATE TABLE public.todo (
    id integer DEFAULT nextval('public.todo_seq'::regclass) NOT NULL,
    task character varying(250) NOT NULL,
    status boolean NOT NULL,
    "createdat" date NOT NULL,
    "updateat" date
);


ALTER TABLE public.todo OWNER TO postgres;

SELECT pg_catalog.setval('public.todo_seq', 1, false);


ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);