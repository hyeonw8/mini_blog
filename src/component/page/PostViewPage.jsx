import React, {useState} from "react";
import styled from "styled-components"; 
import {useNaviagate, useParams} from "react-router-dom";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

function