import React, { useEffect, useState } from "react";
import JobPostingService from "../services/jobPostingService";
import { Button } from "semantic-ui-react";

import "../App.css";

import { Formik } from "formik";
import * as Yup from "yup";

export default function AddingJobPostingForm() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService.getCities().then((result) => setCities(result.data));
  }, []);

  const [jobTitles, setJobTitles] = useState([]);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobTitles()
      .then((result) => setJobTitles(result.data));
  }, []);

  return (
    <div>
      <div className="ui form">
        <Formik
          initialValues={{
            cityId: "",
            jobTitleId: "",
            jobDescription: "",
            workingType: "",
            timeType: "",
            minSalary: "",
            maxSalary: "",
            numberOfNeeds: "",
            releaseDate: "",
            applicationDeadLine: "",
            isActive: false,
          }}
          validationSchema={Yup.object({
            cityId: Yup.string().required("İl  boş bırakılamaz"),
            jobTitleId: Yup.string().required("İş pozisyonu boş bırakılamaz"),
            workingType: Yup.string().required(
              "Çalışma tipi alanı boş bırakılamaz"
            ),
            timeType: Yup.string().required("Çalışma alanı boş bırakılamaz"),
            jobDescription: Yup.string().required(
              "Açıklama alanı boş bırakılamaz"
            ),
            minSalary: Yup.number().required(
              "Minimum maaş alanı boş bırakılamaz"
            ),
            maxSalary: Yup.number().required(
              "Maksimum maaş alanı boş bırakılamaz"
            ),
            numberOfNeeds: Yup.number().required(
              "Eleman İhtiyaç Alanı boş bırakılamaz"
            ),
            releaseDate: Yup.date().required(
              "Başvuru başlama tarihi boş bırakılamaz"
            ),
            applicationDeadLine: Yup.date().required(
              "Başvuru bitiş tarihi boş bırakılamaz"
            ),
            isActive: Yup.bool().oneOf([true], "Koşulları kabul etmelisiniz"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleSubmit,
            handleReset,
            handleChange,
          }) => (
            <div>
              <div class="ui horizontal divider">
                <h4 class="ui header">
                  <i aria-hidden="true" class="bar chart icon"></i>Kayıt
                  İşlemleri
                </h4>
              </div>
              <table class="ui definition table" onSubmit={handleSubmit}>
                <tbody class="">
                  <tr class="">
                    <td class="four wide">İller</td>
                    <td class="">
                      <select
                        id="cityId"
                        value={values.cityId}
                        onChange={handleChange}
                      >
                        <label htmlFor="cityId" />
                        <option value="" label="İl seç.." />
                        {cities.map((city) => (
                          <option key={city.id} id={city.id}>
                            {" "}
                            {city.cityName}
                          </option>
                        ))}
                      </select>
                      {errors.cityId && touched.cityId && (
                        <div className="input-feedback">{errors.cityId}</div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">İş Pozisyonu</td>
                    <td class="">
                      <select
                        id="jobTitleId"
                        value={values.jobTitleId}
                        onChange={handleChange}
                      >
                        <option value="" label="İş Pozisyonu seç.." />
                        {jobTitles.map((jobTitle) => (
                          <option key={jobTitle.id} id={jobTitle.id}>
                            {" "}
                            {jobTitle.title}
                          </option>
                        ))}
                      </select>
                      {errors.jobTitleId && touched.jobTitleId && (
                        <div className="input-feedback">
                          {errors.jobTitleId}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">Çalışma Şekli</td>
                    <td class="">
                      <select
                        id="workingType"
                        value={values.workingType}
                        onChange={handleChange}
                      >
                        <option value="" label="Çalışma tipini seç.." />
                        <option value="iy" label="İş Yerinde" />
                        <option value="uz" label="Uzaktan" />
                      </select>
                      {errors.workingType && touched.workingType && (
                        <div className="input-feedback">
                          {errors.workingType}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">Çalışma Zamanı</td>
                    <td class="">
                      <select
                        id="timeType"
                        value={values.timeType}
                        onChange={handleChange}
                      >
                        <option
                          value=""
                          label="Çalışma zamanının tipini seç.."
                        />
                        <option value="tz" label="Tam Zamanlı" />
                        <option value="yz" label="Yarı Zamanlı" />
                      </select>
                      {errors.timeType && touched.timeType && (
                        <div className="input-feedback">{errors.timeType}</div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">Açıklama</td>
                    <td class="">
                      <input
                        id="jobDescription"
                        type="text"
                        placeholder="Açıklama Ekleyin"
                        className="ui input"
                        value={values.jobDescription}
                        onChange={handleChange}
                      />
                      {errors.jobDescription && touched.jobDescription && (
                        <div className="input-feedback">
                          {errors.jobDescription}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">Min Maaş</td>
                    <td class="">
                      <input
                        id="minSalary"
                        type="text"
                        placeholder="Min Maaş Ekleyin"
                        className="ui input"
                        value={values.minSalary}
                        onChange={handleChange}
                      />
                      {errors.minSalary && touched.minSalary && (
                        <div className="input-feedback">{errors.minSalary}</div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">Max Maaş</td>
                    <td class="">
                      <input
                        id="maxSalary"
                        type="text"
                        placeholder="Max Maaş Ekleyin"
                        className="ui input"
                        value={values.maxSalary}
                        onChange={handleChange}
                      />
                      {errors.maxSalary && touched.maxSalary && (
                        <div className="input-feedback">{errors.maxSalary}</div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">İhtiyaç Duyulan Eleman Sayısı</td>
                    <td class="">
                      <input
                        id="numberOfNeeds"
                        type="text"
                        placeholder="İhtiyaç Sayısı Ekleyin"
                        className="ui input"
                        value={values.numberOfNeeds}
                        onChange={handleChange}
                      />
                      {errors.numberOfNeeds && touched.numberOfNeeds && (
                        <div className="input-feedback">
                          {errors.numberOfNeeds}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">Başvuru Başlama Tarihi</td>
                    <td class="">
                      <input
                        id="releaseDate"
                        type="text"
                        placeholder="Başvuru başlama tarihi Ekleyin"
                        className="ui input"
                        value={values.releaseDate}
                        onChange={handleChange}
                      />
                      {errors.releaseDate && touched.releaseDate && (
                        <div className="input-feedback">
                          {errors.releaseDate}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class="">Başvuru Bitiş Tarihi</td>
                    <td class="">
                      <label
                        htmlFor="applicationDeadLine"
                        value={values.applicationDeadLine}
                        onChange={handleChange}
                      />
                      <input
                        id="applicationDeadLine"
                        type="text"
                        placeholder="Başvuru bitiş tarihi Ekleyin"
                        className="ui input"
                        value={values.applicationDeadLine}
                        onChange={handleChange}
                      />
                      {errors.applicationDeadLine &&
                        touched.applicationDeadLine && (
                          <div className="input-feedback">
                            {errors.applicationDeadLine}
                          </div>
                        )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class=""></td>
                    <td class="">
                      <input
                        id="isActive"
                        type="checkbox"
                        value={values.isActive}
                        onChange={handleChange}
                      />
                      <label htmlFor="isActive">
                        {" "}
                        Sözleşmeyi okudum kabul ediyorum.{" "}
                      </label>
                      {errors.isActive && (
                        <div className="input-feedback">{errors.isActive}</div>
                      )}
                    </td>
                  </tr>
                  <tr class="">
                    <td class=""></td>
                    <td class="">
                      <Button
                        type="submit"
                        className="ui button"
                        disabled={!dirty || isSubmitting}
                      >
                        Kaydol
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
