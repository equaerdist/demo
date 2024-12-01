package model

type JSON map[string]string

func (j *JSON) Has(key string) bool {
	if _, ok := (*j)[key]; ok {
		return true
	}
	return false
}

func (j *JSON) Get(key string) string {
	if v, ok := (*j)[key]; ok {
		return v
	} else {
		return ""
	}
}
