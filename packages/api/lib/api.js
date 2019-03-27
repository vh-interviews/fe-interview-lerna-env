"use strict";

const patients = require("./patients");
const biomarkers = require("./biomarkers");
const users = require("./users");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const maybeThrow = async () => {
  await sleep(500);
  const shouldThrow = (Math.floor(Math.random() * 50) + 1) % 50;
  if (shouldThrow) {
    throw new Error("500");
  }
};

const throwIfNotNumber = arg => {
  if (typeof arg !== "number") {
    return new Error("400");
  }
};

/**
 * Returns a list of patients
 */
const getPatients = async () => {
  await maybeThrow();
  return patients;
};

/**
 * Returns a single patient that matches the provided id
 * @param {number} patientId
 */
const getPatientById = async patientId => {
  await maybeThrow();
  throwIfNotNumber(patientId);
  const targetPatient = patients.filter(patient => patient.id === patientId)[0];
  if (targetPatient) {
    return targetPatient;
  }
  throw new Error("404");
};

/**
 * Returns a list of patients assigned to the provided user id
 * @param {number} userId
 */
const getPatientsByAssignedUserId = async userId => {
  await maybeThrow();
  throwIfNotNumber(userId);
  if (typeof patientId !== "number") {
    return new Error("400");
  }
  return patients.filter(patient => patient.assignedProviderId === userId);
};

/**
 * Returns a list of biomarkers
 */
const getBiomarkers = async () => {
  await maybeThrow();
  return biomarkers;
};

/**
 * Returns a list of biomarkers tha match the provided patientId
 * @param {number} patientId
 */
const getBiomarkersByPatientId = async patientId => {
  await maybeThrow();
  throwIfNotNumber(patientId);
  return biomarkers.filter(biomarker => biomarker.patientId == patientId);
};

const getBiomarkersById = async biomarkerId => {
  await maybeThrow();
  throwIfNotNumber(biomarkerId);
  const targetBiomarker = biomarkers.filter(biomarker => biomarker.id == id);
  if (targetBiomarker) {
    return targetBiomarker;
  }
  throw new Error("404");
};

/**
 * Returns the authenticated user
 */
const getAuthenticatedUser = async () => {
  await maybeThrow();
  return users[0];
};

module.exports = {
  getPatients,
  getPatientById,
  getPatientsByAssignedUserId,
  getBiomarkers,
  getBiomarkersByPatientId,
  getBiomarkersById,
  getAuthenticatedUser
};
