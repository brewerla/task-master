--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

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
-- Name: end_user_id_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.end_user_id_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.end_user_id_sequence OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: end_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.end_user (
    end_user_id integer DEFAULT nextval('public.end_user_id_sequence'::regclass) NOT NULL,
    end_user_first_name character varying(100) NOT NULL,
    end_user_last_name character varying(100) NOT NULL,
    end_user_password character varying(200) NOT NULL,
    end_user_created timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    end_user_username character varying(50) NOT NULL,
    end_user_email character varying(200) NOT NULL,
    CONSTRAINT "username_CK" CHECK ((lower((end_user_username)::text) = (end_user_username)::text))
);


ALTER TABLE public.end_user OWNER TO postgres;

--
-- Name: COLUMN end_user.end_user_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.end_user.end_user_id IS 'End user id';


--
-- Name: COLUMN end_user.end_user_first_name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.end_user.end_user_first_name IS 'End user first name';


--
-- Name: COLUMN end_user.end_user_last_name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.end_user.end_user_last_name IS 'End user last name';


--
-- Name: COLUMN end_user.end_user_password; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.end_user.end_user_password IS 'End user password';


--
-- Name: COLUMN end_user.end_user_created; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.end_user.end_user_created IS 'The timestamp for when the user was created defaulting to the current time';


--
-- Name: COLUMN end_user.end_user_username; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.end_user.end_user_username IS 'The username for the end user';


--
-- Name: COLUMN end_user.end_user_email; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.end_user.end_user_email IS 'End user email';


--
-- Name: CONSTRAINT "username_CK" ON end_user; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON CONSTRAINT "username_CK" ON public.end_user IS 'check if the username is all lowercase';


--
-- Name: test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test (
    test_id integer NOT NULL,
    test_data character varying(100) NOT NULL
);


ALTER TABLE public.test OWNER TO postgres;

--
-- Name: test_test_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.test_test_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.test_test_id_seq OWNER TO postgres;

--
-- Name: test_test_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.test_test_id_seq OWNED BY public.test.test_id;


--
-- Name: test test_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test ALTER COLUMN test_id SET DEFAULT nextval('public.test_test_id_seq'::regclass);


--
-- Name: end_user end_user_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.end_user
    ADD CONSTRAINT end_user_pk PRIMARY KEY (end_user_id);


--
-- Name: end_user end_user_username_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.end_user
    ADD CONSTRAINT end_user_username_unique UNIQUE (end_user_username);


--
-- Name: end_user_id_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX end_user_id_index ON public.end_user USING btree (end_user_id);


--
-- PostgreSQL database dump complete
--

